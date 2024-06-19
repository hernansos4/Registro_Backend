import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('organigrama')
export class OrganigramaEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    padre: number;

    @Column()
    id_clase: number;

}