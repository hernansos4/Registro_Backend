import { Module } from '@nestjs/common';
import { ClasesService } from './clases.service';
import { ClasesController } from './clases.controller';
import { DatabaseModule } from '../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clase } from '../database/Entities/clasesEntity';
import { ClaseP } from '../database/Entities/parentEntity';
import { CarreraEntity } from '../database/Entities/carreraEntity';
import { CarreraClaseEntity } from '../database/Entities/carreraClaseEntity';
import { EstadosClasesEntity } from '../database/Entities/estadosClasesEntity';
import { EstadoEntity } from '../database/Entities/estadoEntity';
import { OrganigramaEntity } from '../database/Entities/organigramaEntity';
import { User } from '../database/Entities/userEntity';


@Module({
  controllers: [ClasesController],
  providers: [ClasesService],
  imports: [DatabaseModule, TypeOrmModule.forFeature([
    Clase,
    ClaseP,
    CarreraEntity,
    CarreraClaseEntity,
    EstadosClasesEntity,
    EstadoEntity,
    OrganigramaEntity,
    User
  ])]
})
export class ClasesModule { }
