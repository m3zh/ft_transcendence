import { Injectable } from '@nestjs/common';
import { UserData } from 'src/prisma/types';
import { PrismaClient } from '@prisma/client';
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {

    constructor(
       private readonly prisma : PrismaClient 
    ) {}


    async validateUser(data: UserData){
        console.log('AuthService');
        console.log(data);
        const user = await this.prisma.users.findFirst({
            where:
                { uid: data.uid }
        })
        // const user = await UsersService.findOne({
        //     where:
        //         { uid: data.uid }
        // })
        if (user) return user;

    }
}
