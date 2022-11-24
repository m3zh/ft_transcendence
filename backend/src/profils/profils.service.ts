import {FileTypeValidator, Injectable, MaxFileSizeValidator, ParseFilePipe, UploadedFile} from '@nestjs/common';
import { CreateProfilDto } from './dto/create-profil.dto';
import { UpdateProfilDto } from './dto/update-profil.dto';
import { PrismaService } from "../prisma/prisma.service";
import {randomInt, randomUUID} from "crypto";
@Injectable()
export class ProfilsService {
  constructor(private prisma: PrismaService) {
  }

  create(data) {
    const temp = [];
    temp["image_url"] = "http://127.0.0.1:3001/profils/avatar/" + data
    temp["hash"] = randomUUID()
    temp["type"] = "avatar"
    return this.prisma.profils.create({data:
          {
            image_url: temp["image_url"],
            hash: temp["hash"],
            type: temp["type"]
          }})
  }

  findAll() {
    return this.prisma.profils.findMany();
  }

  findOne(id: number) {
    return this.prisma.profils.findUnique({where: {uid: id}})
  }

  update(id: number, updateProfilDto: UpdateProfilDto) {
    return `This action updates a #${id} profil`;
  }

  remove(id: number) {
    return `This action removes a #${id} profil`;
  }

}
