import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable} from 'typeorm';
import { ScopeEntity } from './scope.entity';


@Entity({name:'OB_Master_Role'})
export class RoleEntity {

    @PrimaryColumn('varchar', { length: 30 })
    role_id: string;

    @Column('varchar', { length: 50, nullable:true })
    role_name: string;

    
    @ManyToMany(type => ScopeEntity)
    @JoinTable({
        name: 'OB_Role_Scope',
        joinColumn: {
          name: 'role_id',
          referencedColumnName: 'role_id',
        },
        inverseJoinColumn: {
          name: 'scope_id',
          referencedColumnName: 'scope_id',
        },
      })
    scopes: ScopeEntity[];
    
    
}