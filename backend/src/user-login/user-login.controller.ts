import { Controller, Get, Post,Body, UseGuards,Request } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user-login')
export class LoginController {

    constructor(private authservice: AuthService) { }

    @Post('/userdetails')
    async getUser(@Body() userData): Promise<any> {
        return this.authservice.validateUser(userData.username);

    }

    @Post('loginuser')
    async loginUser(@Body() userData): Promise<any> {
        return this.authservice.validateUser(userData.username).catch((err) => {
            //console.log("Error: ", err)
            //return err;
        });
    }

    @Get('/getuser')
    @UseGuards(JwtAuthGuard)
    getProfile(@Request() req) {

    return req.user;

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
