import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
// import { LocalStrategy } from './local.strategy';
import { UserLogin } from '../entity/user.entity';

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
