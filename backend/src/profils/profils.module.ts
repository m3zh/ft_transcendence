import { Module } from '@nestjs/common';
import { ProfilsService } from './profils.service';
import { ProfilsController } from './profils.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MulterModule } from "@nestjs/platform-express";

@Module({
  controllers: [ProfilsController],
  providers: [ProfilsService],
  imports: [PrismaModule],
})
export class ProfilsModule {}
