//import { User } from 'src/users/entities/user.entity';
import { UserData } from 'src/prisma/types';
import { UsersService } from '../users/users.service'
import { CreateUserDto } from '../users/dto/create-user.dto';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService
    ) {}


    async validateUser(data: UserData){
        console.log('AuthService');
        const user = await this.usersService.findOne(parseInt(data["id"]));
        if (user) return user;
        console.log('New User created')
        const newUser = this.usersService.create( new CreateUserDto );
        return newUser;
    }

    async findUser(id: number){
        const user = await this.usersService.findOne( id );
        return user;
    }
}
