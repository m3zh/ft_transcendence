import { Module } from '@nestjs/common';
import { Strategy42 } from './strategy42.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersService } from 'src/users/users.service';
import { SessionSerializer } from './serializer';
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constant";
import {JwtStrategy} from "./jwt.strategy";

@Module({
  imports: [
      PrismaModule,
      PassportModule.register({ session: true }),
      JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [
    Strategy42,
    SessionSerializer,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
    UsersService,
    JwtStrategy,
  ],
  controllers: [AuthController]
})
export class AuthModule {}
