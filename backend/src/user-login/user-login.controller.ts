
import { Controller, Get, Post,Body } from '@nestjs/common';
import { LoginService } from './user-login.service';

@Controller('user-login')
export class LoginController {

    constructor(private LoginService: LoginService) { }

    @Post('/userdetails')
    async getUser(@Body() userData): Promise<any> {
     
     return this.LoginService.findUser(userData);

    }

    // @Post('/userrole')
    // async getRole(@Body() userRole): Promise<any> {
     
    //  return this.LoginService.findRole(userRole);

    // }

    // @Post('/rolescope')
    // async getRoleScope(@Body() userRoleScope): Promise<any> {
     
    //  return this.LoginService.findRoleScope(userRoleScope);

    // }
}
