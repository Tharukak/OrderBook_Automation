import { RoleEntity } from 'src/entity/role.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity({name:'OB_Master_User'})
export class UserLogin {
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

  // @Column()
  // is_acive: boolean;

  @Column()
  created_date: Date;

  @ManyToMany(type => RoleEntity)
  @JoinTable({
      name: 'OB_User_Role',
      joinColumn: {
        name: 'user_id',
        referencedColumnName: 'user_id',
      },
      inverseJoinColumn: {
        name: 'role_id',
        referencedColumnName: 'role_id',
      },
    })
  roles: RoleEntity[];


}