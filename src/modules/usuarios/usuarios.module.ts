import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { DatabaseModule } from '../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../database/Entities/userEntity';
import { CarreraClaseEntity } from '../database/Entities/carreraClaseEntity';
import { CarreraEntity } from '../database/Entities/carreraEntity';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService],
  imports: [DatabaseModule, TypeOrmModule.forFeature([User, CarreraClaseEntity, CarreraEntity])]
})
export class UsuariosModule { }
