import {
    Controller,
    Get,
    UseGuards,
    Req,
    Res,
    Inject
} from '@nestjs/common';
import { Auth42Guard } from './auth.guards';
import { Response, Request } from 'express';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { ExecutionContext } from "@nestjs/common";

@Controller() // this is default get url for this controller
export class AuthController {
    constructor(
        private jwtService: JwtService,
    ) {};

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
    handleRedirection(
        ctx: ExecutionContext,
        @Req() req: Request,
        @Res() res: Response )
        {
            const user = req.user;
            console.log("redirect");
            console.log(user);
            const jwtToken = this.jwtService.sign({
                id: user["uid"],
                login42: user["intra_id"],
            });
            res.cookie('jwt_token', jwtToken, { sameSite: 'none', secure: true });
            res.redirect("http://localhost:3000/");
        }
}
