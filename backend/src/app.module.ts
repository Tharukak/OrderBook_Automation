import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { Orderbook } from './orderbook-details/orderbook-details.entity';
import { OrderbookDetailsModule } from './orderbook-details/orderbook-details.module';

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
  }),TypeOrmModule.forFeature([Orderbook]),OrderbookDetailsModule],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
