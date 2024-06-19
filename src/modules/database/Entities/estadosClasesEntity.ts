import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('clasess_aprovadas')
export class EstadosClasesEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_clase: number;

    @Column()
    id_user: number;

    @Column()
    estado: number;

}