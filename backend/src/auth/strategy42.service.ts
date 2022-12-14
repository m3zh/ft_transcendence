import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-42';
import { Inject, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class Strategy42 extends PassportStrategy(Strategy) {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService,) 
        {
            super({
                clientID: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                callbackURL: 'http://localhost:3000/home',
                scope: ['public'],
            });
        }

    async validate(accessToken, refreshToken, user ): Promise<any> {
        console.log(accessToken);
        console.log(refreshToken);
        const logged_user = await this.authService.validateUser( user )
        return logged_user || null;    // either return user data or nothing
    }
}