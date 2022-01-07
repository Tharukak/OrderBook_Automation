
import { Controller, Get, Post,Body } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';



@Controller('user-login')
export class LoginController {

    constructor(private LoginService:AuthService) { }

    @Post('/userdetails')
    async getUser(@Body() userData): Promise<any> {
     
     return this.LoginService.validateUser(userData.username);

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
