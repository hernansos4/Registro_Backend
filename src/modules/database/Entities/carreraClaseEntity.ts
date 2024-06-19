import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('carrera_clases')
export class CarreraClaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    id_carrera: number;

    @Column()
    id_clases: number;
}
