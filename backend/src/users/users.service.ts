import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFriendsDto } from './dto/create-friends.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return this.prisma.users.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.users.findMany();
  }

  async findOne(uid: number) {
    if (Number.isNaN(uid)) {
      throw new HttpException('DATA NOT FOUND', HttpStatus.NOT_FOUND)
    }
    const content = await this.prisma.users.findUnique({
      where: { intra_id: uid },
    });
    if (!content) {
      //throw new HttpException('DATA NOT FOUND', HttpStatus.NOT_FOUND)
    }
    return content;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.users.update({
      where: { intra_id: id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.users.delete({ where: { intra_id: id } });
  }

  addfriends(friends: string, intra_id: number) {
    const amp = parseInt(friends);
    return this.prisma.users.update({
      where: { intra_id: intra_id },
      data: {
        friends: {
          push: friends,
        },
      },
    });
  }

  async deletefriends(friends: string, idintra: number) {
    const amp = parseInt(friends);
    const user = await this.prisma.users.findUnique({
      where: {
        intra_id: idintra,
      },
    });
    const find = user.friends.indexOf(friends);
    user.friends.splice(find, 1);
    return this.prisma.users.update({
      where: { intra_id: idintra },
      data: {
        friends: user.friends,
      },
    });
  }
  
  addblocked(blocked: string, idintra: number) {
    const amp = parseInt(blocked);
    return this.prisma.users.update({
      where: { intra_id: idintra },
      data: {
        blacklist: {
          push: blocked,
        },
      },
    });
  }

  async requestfriends(friends: CreateFriendsDto, demand: string) {
    return this.prisma.friends.createMany({
      data: [
        {
          requester: demand.toString(),
          status: 'confirm',
          friends: friends.friends,
        },
        {
          requester: friends.friends,
          status: 'confirm',
          friends: demand.toString(),
        },
      ],
    });
  }
  async deleteblocked(blocked: string, idintra: number) {
    const amp = parseInt(blocked);
    const user = await this.prisma.users.findUnique({
      where: {
        intra_id: idintra,
      },
    });
    const find = user.friends.indexOf(blocked);
    if (find > -1) {
      throw new HttpException('DATA NOT FOUND', HttpStatus.NOT_FOUND);
    }
    user.blacklist.splice(find, 1);
    return this.prisma.users.update({
      where: { intra_id: idintra },
      data: {
        blacklist: user.blacklist,
      },
    });
  }
}
