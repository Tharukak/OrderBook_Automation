import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Login {
  @PrimaryGeneratedColumn()
  cluster_code: string;

  @Column()
  department_code: string;

  @Column()
  user_id: string;

  @Column()
  user_name: string;

  @Column()
  password: string;

  @Column()
  is_acive: boolean;

  @Column()
  created_date: Date;

}