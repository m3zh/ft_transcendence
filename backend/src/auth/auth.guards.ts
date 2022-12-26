import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// we need a Guard to handle the passport module
// it passes down the request as an http request
// it logs the user in and return a class
@Injectable() // it marks a class as a provider and makes it re-usable in other classes' constructors
export class Auth42Guard extends AuthGuard('42') {
    async canActivate(context: ExecutionContext) {
        console.log('authguard');
        const activate = (await super.canActivate(context)) as boolean;
        const request = context.switchToHttp().getRequest();                // here we switch to HTTP protocol
        await super.logIn(request);
        console.log(activate);
        return activate; // isAuthenticated() comes from passport.js automatically;
        // it says. "hey! does a session exist for this user? If so, keep going."

    }
}

@Injectable() // it marks a class as a provider and makes it re-usable in other classes' constructors
export class AuthenticatedGuard implements CanActivate{
    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();                // here we switch to HTTP protocol
        return request.isAuthenticated(); // isAuthenticated() comes from passport.js automatically;
        // it says. "hey! does a session exist for this user? If so, keep going."

    }
}