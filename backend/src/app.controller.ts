import { Controller, Get, UseGuards,Request } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { OrderbookService } from './orderbook-details/orderbook-details.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('/orderdetails')
  // getDetails(): any {
  //   return this.OrderbookService.findAll();
  // }
 
  @Get('/getuser')
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req) {
    return req.user;
  }

}
