import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PrismaModule, 
    UsersModule, 
    AuthModule, 
    ConfigModule.forRoot(),
    PassportModule.register({ session: true }), // this enables session for passport
  ],  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
