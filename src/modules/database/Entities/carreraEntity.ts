import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('carrera')
export class CarreraEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;
}