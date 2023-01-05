import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProfilsModule } from './profils/profils.module';
import { AuthService } from "./auth/auth.service";
import { JwtService } from "@nestjs/jwt";
import { GamesController } from './games/games.controller';
import { GamesModule } from './games/games.module';
import {GamesService} from "./games/games.service";

@Module({
  imports: [
    PrismaModule, 
    UsersModule, 
    AuthModule, 
    ConfigModule.forRoot(),
    PassportModule.register({ session: true }), // this enables session for passport
    ProfilsModule, GamesModule,
  ],
  controllers: [AppController, GamesController],
  providers: [AppService, AuthService, JwtService, GamesService],
})
export class AppModule {}
