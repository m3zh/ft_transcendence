import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({data: createUserDto});
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  async findOne(uid: number) {
    return this.prisma.users.findUnique({where: {intra_id : uid}})
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update(
        {
          where: {uid: id},
          data: updateUserDto
        }
    )
  }

  remove(id: number) {
    return this.prisma.users.delete({where: {uid: id}})
  }
}
