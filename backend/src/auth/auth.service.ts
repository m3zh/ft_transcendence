import { Injectable } from '@nestjs/common';
import { UserData } from 'src/prisma/types';
import { UsersService } from '../users/users.service'

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

    }
}
