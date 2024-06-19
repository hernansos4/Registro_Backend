import { Injectable } from '@nestjs/common';
import { RegisterClaseDto } from './dto/register.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Clase } from '../database/Entities/clasesEntity';
import { Repository, getManager } from 'typeorm';
import { ClaseP } from '../database/Entities/parentEntity';
import { CarreraEntity } from '../database/Entities/carreraEntity';
import { CarreraClaseEntity } from '../database/Entities/carreraClaseEntity';
import { EstadosClasesEntity } from '../database/Entities/estadosClasesEntity';
import { UpdateClaseDto } from './dto/update-clase.dto';
import { EstadoEntity } from '../database/Entities/estadoEntity';
import { OrganigramaEntity } from '../database/Entities/organigramaEntity';
import { User } from '../database/Entities/userEntity';



@Injectable()
export class ClasesService {
  constructor(
    @InjectRepository(Clase)
    private claseRepo: Repository<Clase>,

    @InjectRepository(ClaseP)
    private clasePRepo: Repository<ClaseP>,

    @InjectRepository(CarreraEntity)
    private carreraRepo: Repository<CarreraEntity>,

    @InjectRepository(CarreraClaseEntity)
    private carreraClaseRepo: Repository<CarreraClaseEntity>,

    @InjectRepository(EstadosClasesEntity)
    private estadosClasesRepo: Repository<EstadosClasesEntity>,

    @InjectRepository(EstadoEntity)
    private estadoRepo: Repository<EstadoEntity>,

    @InjectRepository(OrganigramaEntity)
    private organigramaRepo: Repository<OrganigramaEntity>,

    @InjectRepository(User)
    private userRepo: Repository<User>

  ) { }

  findCarrera() {
    return this.carreraRepo.find()
  }

  async setEstado(setestado: UpdateClaseDto) {
    const estadoC = new EstadosClasesEntity();

    const estadoProps = await this.estadoRepo.findOne({ where: { name_estado: setestado.estado } });

    const estadoVerification = await this.estadosClasesRepo.findOne({ where: { id_clase: setestado.id_clase } });
    if (estadoVerification) {
      return await this.estadosClasesRepo.update(estadoVerification.id, { estado: estadoProps.id });
    }

    estadoC.id_clase = setestado.id_clase;
    estadoC.id_user = setestado.id_user;

    estadoC.estado = estadoProps.id;

    return await this.estadosClasesRepo.save(estadoC);
  }

  async findOrganigrama() {
    return await this.organigramaRepo.query(`
      select c.id::varchar, c.nombre, c.unidades_valorativas::varchar, COALESCE(ec.name_estado, 'Pendiente') estado, COALESCE(co.padre::varchar, '' )"parentId" 
      from clases c 
      left join clasess_aprovadas ca on c.id = ca.id_clase 
      left join estados_clases ec on ca.estado = ec.id 
      left join clases_organigrama co on c.id = co.id_clase 
      group by c.id, ec.name_estado,co.padre`
    )

  }

  async findCarreraUser() {
    const res = await this.userRepo.query(`select c.nombre, u.username from users u
    left join carrera c on u.id_carrera = c.id`)
    return res[0];
  }

  async findAll() {
    return await this.claseRepo.query(`
      SELECT c.*, COALESCE(ec.name_estado, 'pendiente') estado_clase
      FROM clases c
      LEFT JOIN clasess_aprovadas ca ON c.id = ca.id_clase
      LEFT JOIN estados_clases ec ON ca.estado = ec.id
    `)
  }

  async register(register: RegisterClaseDto) {
    const clases = new Clase();
    const ClaseOrganigrama = new ClaseP();
    const carrera_clases = new CarreraClaseEntity();


    clases.nombre = register.nombre;
    clases.unidades_valorativas = register.unidades_valorativas;
    const sClase = await this.claseRepo.save(clases);

    carrera_clases.id_carrera = register.id_carrera;
    carrera_clases.id_clases = sClase.id;
    await this.carreraClaseRepo.save(carrera_clases);


    ClaseOrganigrama.padre = register.parent || 0;
    ClaseOrganigrama.id_clase = sClase.id;
    this.clasePRepo.save(ClaseOrganigrama);

    return sClase;
  }
}

