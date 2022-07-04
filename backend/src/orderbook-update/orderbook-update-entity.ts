import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity({name:'OB_Transaction_Master'})
export class OrderbookUpdate {
  @PrimaryGeneratedColumn()
  trans_id: Number;

  @Column()
  mo_no: Number;

  @Column()
  required_pdc: Date;

  @Column()
  impact_type: string;

  @Column()
  comment: string;

  @Column()
  include_exclude: string;

  @Column()
  planning_smv: number;

   @Column()
   trans_date: Date;

  @Column()
  updated_by: string;

  @Column()
  send_approval: boolean;

  @Column()
  approval_flg: boolean;

  @Column()
  reject_flg: boolean;

  @Column()
  m3_update_flg: boolean;
  
}