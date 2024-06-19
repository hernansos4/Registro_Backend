import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../database/Entities/userEntity';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CarreraClaseEntity } from '../database/Entities/carreraClaseEntity';
import { JwtService } from '@nestjs/jwt';
import { find } from 'rxjs';
import * as bcrypt from 'bcrypt';
import { log } from 'console';
import { CarreraEntity } from '../database/Entities/carreraEntity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,

    @InjectRepository(CarreraClaseEntity)
    private carreraClaseRepo: Repository<CarreraClaseEntity>,

    @InjectRepository(CarreraEntity)
    private carreraRepo: Repository<CarreraEntity>,

    private jwtTokenService: JwtService
  ) { }

  async findAll() {
    return await this.userRepo.find();
  }

  async login(login: LoginDto) {
    const user = await this.userRepo.findOne({ where: { username: login.username } });

    if (!user) {
      throw new UnauthorizedException('Invalid username');
    }

    const passwordMatches = await bcrypt.compare(login.password, user.password);

    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid password');
    }

    const token = this.jwtTokenService.sign({ username: login.username });
    return {
      username: login.username,
      id: user.id,
      token
    };
  }

  async register(register: RegisterDto) {
    const newUser = new User();

    newUser.username = register.username;
    newUser.password = await bcrypt.hash(register.password, 10);
    newUser.id_carrera = register.id_carrera;
    return await this.userRepo.save(newUser);
  }

  async infoUser(id: string) {
    const user = await this.userRepo.findOne(
      {
        where: { id: +id },
      }
    );

    const carreraClase = await this.carreraClaseRepo.findOne(
      {
        where: { id_carrera: user.id_carrera },
      }
    );

    const carrera = await this.carreraRepo.findOne(
      {
        where: {
          id: carreraClase.id_carrera
        }
      }
    );

    return {
      user,
      carrera
    };
  }

}
