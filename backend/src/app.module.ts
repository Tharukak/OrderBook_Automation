import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';

@Module({
  imports: [ TypeOrmModule.forRoot({
    name : 'default',
    type: 'mssql',
    host: '10.227.241.27',
    port:1433,
    username: 'RO_User',
    password: 'RO_User',
    database: 'Elixir',
    autoLoadEntities: true,
    synchronize: false,
    options: {
      cryptoCredentialsDetails: {
        minVersion: 'TLSv1'
      }, encrypt: false
    }
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
