import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('estados_clases')
export class EstadoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name_estado: string;
}