import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-42';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Strategy42 extends PassportStrategy(Strategy) {
    constructor() {
            super({
                clientID: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                callbackURL: 'http://localhost:3001/home',
                scope: ['public'],
            });
        }

    async validate(accessToken: string, refreshToken: string ) {
        console.log(accessToken);
        console.log(refreshToken);
    }
}