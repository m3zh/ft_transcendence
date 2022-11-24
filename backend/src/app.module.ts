import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProfilsModule } from './profils/profils.module';

@Module({
  imports: [
    PrismaModule, 
    UsersModule, 
    AuthModule, 
    ConfigModule.forRoot(),
    PassportModule.register({ session: true }),
    ProfilsModule, // this enables session for passport
  ],  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
