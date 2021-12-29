import { Entity, Column, PrimaryColumn} from 'typeorm';


@Entity({name:'OB_Master_Scope'})
export class ScopeEntity {

    @PrimaryColumn('varchar', { length: 30 })
    scope_id: string;

    @Column('varchar', { length: 50, nullable:true })
    scope_name: string;
}