import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { JwtAuthGuard } from '../auth/jwt.authguard';
import { AuthGuard } from '@nestjs/passport';
import { REQUEST } from '@nestjs/core';
import { CreateFrDto } from './dto/create-fr.dto';
import { ApiBearerAuth, ApiProperty } from '@nestjs/swagger';
import { CreateFriendsDto } from './dto/create-friends.dto';

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
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Get(':uid')
  async findOne(@Param('uid') id: string, @Request() req) {
    return this.usersService.findOne(+id);
  }
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return this.usersService.update(+id, updateUserDto);
  }
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Get('/userid/id')
  getinfo(@Request() req) {
    return req.user;
  }
  // @UseGuards(JwtAuthGuard)
  // @Patch('')
  // update(@Request() req, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+req.user.login42, updateUserDto);
  // }
  @ApiBearerAuth('JWT-auth')
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
  @ApiBearerAuth('JWT-auth')
  @Post('friends/add')
  @UseGuards(JwtAuthGuard)
  addfriends(@Body('friends') friends: string, @Request() req) {
    return this.usersService.addfriends(friends, req.user.login42);
  }
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Delete('friends/delete')
  deletefriends(@Body('friends') friends: string) {
    return this.usersService.deletefriends(friends);
  }
  @ApiProperty({
    description: 'Add request for a friends',
  })
  friends: string;
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Post('friends/request')
  requestfriends(@Body() createfriends: CreateFriendsDto, @Request() req) {
    console.log(createfriends + '\n ----------\n' + req.user.login42);
    return this.usersService.requestfriends(createfriends, req.user.login42);
  }
  @UseGuards(JwtAuthGuard)
  @Get('block/add/:blocked')
  addblocked(@Param('blocked') blocked: string, @Request() req) {
    return this.usersService.addblocked(blocked, req.user.login42);
  }
  @ApiBearerAuth('JWT-auth')
  @UseGuards(JwtAuthGuard)
  @Get('block/delete/:id')
  deleteblocked(@Param('id') blocked: string, @Request() req) {
    return this.usersService.deleteblocked(blocked, req.user.login42);
  }
}
