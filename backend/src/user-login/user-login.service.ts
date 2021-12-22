import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Login } from './user-login.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Login)
    private Login: Repository<Login>,
  ) {}

  async findUser(data : any): Promise<Login[]> {
    return await this.Login.query(`EXECUTE get_user '${data.user_id}'`);    
  }

  async findRole(data : any): Promise<Login[]> {
    return await this.Login.query(`EXECUTE get_role '${data.user_id}'`);    
  }

  async findRoleScope(data : any): Promise<Login[]> {
    return await this.Login.query(`EXECUTE get_role_scope '${data.role_id}'`);    
  }
}