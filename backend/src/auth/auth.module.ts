import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserLogin } from '../user-login/user-login.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({  
  imports: [   
      PassportModule,
      TypeOrmModule.forFeature([UserLogin]),
      JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { },
      }),
  ],  
  controllers: [],  
  providers: [AuthService,JwtStrategy],  
  exports: [AuthService],

  
})


export class AuthModule {}
