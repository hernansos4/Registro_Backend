import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'process';
import { User } from './Entities/userEntity';
import { Clase } from '../database/Entities/clasesEntity';
import { ClaseP } from './Entities/parentEntity';
import { CarreraEntity } from './Entities/carreraEntity';
import { CarreraClaseEntity } from './Entities/carreraClaseEntity';
import { EstadosClasesEntity } from './Entities/estadosClasesEntity';
import { EstadoEntity } from './Entities/estadoEntity';
import { OrganigramaEntity } from './Entities/organigramaEntity';



@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            password: 'cRew2020',
            username: 'postgres',
            entities: [
                User,
                CarreraClaseEntity,
                Clase, ClaseP,
                CarreraEntity,
                CarreraClaseEntity,
                EstadosClasesEntity,
                EstadoEntity,
                OrganigramaEntity
            ],
            database: 'postgres',
            synchronize: false,
            logging: true,
        })]
})
export class DatabaseModule { }
