import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-42';
import { Injectable } from '@nestjs/common';

@Injectable
export class Strategy42 extends PassportStrategy(Strategy) {
    constructor() {
            super({
                clientUID: process.env.CLIENT_UID,
                clientSecret: process.env.CLIENT_SECRET,
                callbackURL: 'http://localhost:3000/home',
                scope: ['profile', 'email']
            });
        }

    async validate(accessToken: string, refreshToken: string ) {
        console.log(accessToken);
        console.log(refreshToken);
    }
}