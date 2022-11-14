import { Controller, Get, UseGuards } from '@nestjs/common';
import { Auth42Guard } from './guards'

@Controller('auth')
export class AuthController {

    @Get('/auth') // this is a decorator, it states where the user will be redirected to authenticate
                                     // do NOT add ; at the end of the line
    @UseGuards(Auth42Guard)
    handleAuthentication(){
        return {
            msg: '42 authentication' 
        };
    }

    @Get('/home') // this has to math the route ( no need to write localhost:3001 ) redirection of the 42 api settings
    @UseGuards(Auth42Guard)
    handleRedirection(){
        return {
            msg: 'OK' 
        };
    }
}
