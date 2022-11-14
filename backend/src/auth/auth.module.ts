import { Module } from '@nestjs/common';
import { Strategy42 } from './strategy42.service';
import { AuthController } from './auth.controller';

@Module({
  providers: [Strategy42],
  controllers: [AuthController]
})
export class AuthModule {}
