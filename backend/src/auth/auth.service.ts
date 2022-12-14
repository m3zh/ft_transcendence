//import { User } from 'src/users/entities/user.entity';
import { UserData } from 'src/prisma/types';
import { UsersService } from '../users/users.service'
import { CreateUserDto } from '../users/dto/create-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService
    ) {}


    async validateUser(data: UserData){
        console.log('AuthService');
        console.log(data);
        const user = await this.usersService.findOne(parseInt(data["id"]));
        if (user) return user;
        console.log('Creating new user...');

        const new_user = new CreateUserDto;
        new_user["username"] = data["username"];
        new_user["avatar"] = data["_json"]["image"]["link"];
        new_user["intra_id"] = parseInt(data["id"]);
        const newUser = this.usersService.create( new_user );
        console.log('New User created');
      return newUser;
    }

    async findUser(intratoken: number){
        const user = await this.usersService.findOne( intratoken );
        return user;
    }
}
