import { Module } from '@nestjs/common';
import { Strategy42 } from './strategy42.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [ PrismaModule ],
  providers: [
    Strategy42, {
    provide: 'AUTH_SERVICE',
    useClass: AuthService,
  },
    UsersService
  ],
  controllers: [AuthController]
})
export class AuthModule {}