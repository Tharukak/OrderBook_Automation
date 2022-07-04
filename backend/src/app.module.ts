import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { Orderbook } from './orderbook-details/orderbook-details.entity';
import { OrderbookDetailsModule } from './orderbook-details/orderbook-details.module';
import { LoginController } from './user-login/user-login.controller';
import { LoginService } from './user-login/user-login.service';
import { UserLogin } from './user-login/user-login.entity';
import { RoleEntity } from './entity/role.entity';
import { ScopeEntity } from './entity/scope.entity';
import { AuthService } from './auth/auth.service';
import { JwtService, JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { OrderbookUpdateModule } from './orderbook-update/orderbook-update.module';
import { OrderbookM3ApiController } from './orderbook-m3-api/orderbook-m3-api.controller';
import { OrderbookM3ApiService } from './orderbook-m3-api/orderbook-m3-api.service';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mssql',
    host: '10.150.11.251',
    port:1433,
    username: 'sa',
    password: 'Brdx@7000',
    database: 'OrderBook',
    autoLoadEntities: true,
    synchronize: false,
    options: {
      cryptoCredentialsDetails: {
        minVersion: 'TLSv1'
      }, encrypt: false
    }
  }),TypeOrmModule.forFeature([Orderbook,UserLogin,RoleEntity,ScopeEntity]),OrderbookDetailsModule,AuthModule, OrderbookUpdateModule],
  controllers: [AppController,LoginController, OrderbookM3ApiController],
  providers: [AppService,LoginService, OrderbookM3ApiService],

})
export class AppModule {}
