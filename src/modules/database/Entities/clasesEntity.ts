import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('clases')

export class Clase {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column('int')
    unidades_valorativas: number;
}