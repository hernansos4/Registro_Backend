import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_carrera: number;

  @Column()
  username: string;

  @Column()
  role: string;

  @Column('int')
  clases_aprovadas: number;

  @Column()
  password: string;

  @Column('timestamp')
  created_at: Date;
}