import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProfilsModule } from './profils/profils.module';
import { AuthnModule } from './authn/authn.module';
import {AuthService} from "./auth/auth.service";
import {jwtConstants} from "./auth/constant";
import {JwtService} from "@nestjs/jwt";


@Module({
  imports: [
    PrismaModule, 
    UsersModule, 
    AuthModule, 
    ConfigModule.forRoot(),
    PassportModule.register({ session: true }), // this enables session for passport
    ProfilsModule,
    AuthnModule,

  ],  
  controllers: [AppController],
  providers: [AppService, AuthService, JwtService],
})
export class AppModule {}
