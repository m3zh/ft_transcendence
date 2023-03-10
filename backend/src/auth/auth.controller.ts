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
import {AuthService} from "./auth.service";

@Controller() // this is default get url for this controller
export class AuthController {
    constructor(
        @Inject('AUTH_SERVICE') private readonly authService: AuthService,
    ) {};

    @Get('login')  // this is a decorator, it states where the user will be redirected
            // to authenticate
            // do NOT add ; at the end of the line
            // do NOT add / before the beginning of the path, eg. NO '/auth'
    @UseGuards(Auth42Guard)
    handleAuthentication(){}

    @Get('redirect') // this has to match the route ( no need to write localhost:3001 ) redirection of the 42 api settings
    @UseGuards(Auth42Guard)
    async handleRedirection(
        @Req() req: Request,
        @Res({ passthrough: true }) res: Response )
        {
            const user = req.user;
            console.log("redirect");
            const jwt = await this.authService.login(user);
            res.cookie('jwt_token', jwt.access_token, { sameSite: 'none', secure: true });
            res.redirect("http://localhost:3000/");
        }

    @Get('logout')
    logout(@Req() req: any, @Res({ passthrough: true }) res: Response) {
        res.cookie('jwt_token', '', {
            httpOnly: false,
        });
        res.status(302).redirect(`http://localhost:3000/`);
    }
}
