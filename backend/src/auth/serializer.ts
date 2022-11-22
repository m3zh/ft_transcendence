import { Inject, Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService,
    ) {
        super();
    }

    serializeUser(user: User, done: Function) {
        done(null, user);
        console.log('Serializing user...');
    }

    async deserializeUser(payload: any, done: Function) {
        const user = await this.authService.findUser(payload.id);
        console.log('Deserializing user...');
        return user ? done(null, user) : done(null, null); // done(error, userFound)
    }
}