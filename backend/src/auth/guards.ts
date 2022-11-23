import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// we need a Guard to handle the passport module
// it passes down the request as an http request
// it logs the user in and return a class
@Injectable() // it marks a class as a provider and makes it re-usable in other classes' contructors
export class Auth42Guard extends AuthGuard('42') {
    async canActivate(context: ExecutionContext) {
        const activate = (await super.canActivate(context)) as boolean;
        const request = context.switchToHttp().getRequest();                // here we switch to HTTP protocol
        await super.logIn(request);
        console.log(activate);
        return activate;
    }
}