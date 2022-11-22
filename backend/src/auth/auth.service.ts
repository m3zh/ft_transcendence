import { Injectable } from '@nestjs/common';
import { UserData } from 'src/prisma/types';
import { UsersService } from '../users/users.service'
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService
    ) {}


    async validateUser(data: UserData){
        console.log('AuthService');
        console.log(data.uid);
        const user = await this.usersService.findOne(data.uid)
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
