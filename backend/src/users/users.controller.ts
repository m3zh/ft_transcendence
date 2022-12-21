import {Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { JwtAuthGuard } from '../auth/jwt.authguard';
import { AuthGuard } from '@nestjs/passport';
import {REQUEST} from "@nestjs/core";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
 @UseGuards(JwtAuthGuard)
  @Get(':uid')
  async  findOne(@Param('uid') id: string, @Request() req) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
  @Get('friends/add/:friends')
  addfriends(@Param('friends') friends: string)
  {
    return this.usersService.addfriends(friends);
  }
  @Get('friends/delete/:friends')
  deletefriends(@Param('friends') friends: string)
  {
    return this.usersService.deletefriends(friends);
  } @Get('block/add/:friends')
  addblocked(@Param('blocked') blocked: string)
  {
    return this.usersService.addblocked(blocked);
  }
  @Get('block/delete/:blocked')
  deleteblocked(@Param('blocked') blocked: string)
  {
    return this.usersService.deleteblocked(blocked);
  }

}
