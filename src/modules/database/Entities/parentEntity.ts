import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('clases_organigrama')

export class ClaseP {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    padre: number;

    @Column('int')
    id_clase: number;
}