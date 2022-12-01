import { Module } from '@nestjs/common';
import { AuthnService } from './authn.service';
import {PrismaModule} from "../prisma/prisma.module";
import {UsersModule} from "../users/users.module";
import { LocalStrategy } from './local.strategy';
import {JwtModule} from "@nestjs/jwt";
@Module({
  providers: [AuthnService, LocalStrategy],
  imports: [PrismaModule, UsersModule, JwtModule.register({
    secret: "2145148",
    signOptions: { expiresIn: '1h' },
  }),],
  exports: [AuthnService],
})
export class AuthnModule {}
