import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserLogin } from '../user-login/user-login.entity';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, @InjectRepository(UserLogin)
    private usersRepository: Repository<UserLogin>) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.findOneUser(username);
        if(!user)  throw new HttpException('User not found', HttpStatus.UNAUTHORIZED); 
        const isMatch = await bcrypt.compare(pass);        
        if (isMatch) {
          const roles = [];
          const scopes = [];
          const { password, ...result } = user;
          user.roles.map(role=>{
              if (roles.includes(role.role_name) === false) roles.push(role.role_name);
            role.scopes.map(scope=>{
              if (scopes.includes(scope.scope_name) === false) scopes.push(scope.scope_name)
            })
          })
          const payload = { username: user.user_name, roles: roles,scopes:scopes };
          return {
            user_name: user.user_name,
            roles: roles,
            scopes:scopes, 
            token: this.jwtService.sign(payload),
          };
        }
        throw new HttpException('Login failed', HttpStatus.UNAUTHORIZED); 
      }

      findOneUser(user_name): Promise<UserLogin> {
        return this.usersRepository.findOne({
            where: {user_name: user_name},
            relations: ['roles','roles.scopes']
          }); 
    }
}
