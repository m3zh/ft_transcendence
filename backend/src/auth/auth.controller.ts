import {
    Controller,
    Get,
    UseGuards,
    Req,
    Res,
    Inject
} from '@nestjs/common';
import { Auth42Guard } from './guards';
import { Response } from 'express';

@Controller() // this is default get url for this controller
export class AuthController {

    @Get('auth')  // this is a decorator, it states where the user will be redirected
            // to authenticate
            // do NOT add ; at the end of the line
            // do NOT add / before the beginning of the path, eg. NO '/auth'
    @UseGuards(Auth42Guard)
    handleAuthentication(){
        return {
            msg: '42 authentication' 
        };
    }

    @Get('redirect') // this has to match the route ( no need to write localhost:3001 ) redirection of the 42 api settings
    @UseGuards(Auth42Guard)
    handleRedirection(@Res() res: Response) {
        res.redirect("http://localhost:3000/home");
    }
}
