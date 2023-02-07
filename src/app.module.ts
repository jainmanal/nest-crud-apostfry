import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from "./app.gatway";
import { User } from './User/user.entity';
import { UserModule } from './User/user.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "crud-nest",
      entities: [User]
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppGateway ,AppService],
}) 
export class AppModule {}


