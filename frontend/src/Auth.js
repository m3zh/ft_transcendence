import React, { Component } from 'react';
//import Passport from 'passport-42'

// export const FortyTwoStrategy = new Passport.Strategy()
// passport.use(new FortyTwoStrategy({
//     clientID: "10cecaaaa2413c528ac1c09927cb924c00969db57314f16fbad9876aa01c914d",
//     clientSecret: "777a61faf7418054d7a5b934fb9f49157ff7a0a2c10a698e37cb95cd17314ed9",
//     callbackURL: "http://127.0.0.1:3000/auth/42/callback"
// },
// function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ fortytwoId: profile.id }, function (err, user) {
//     return cb(err, user);
//     });
// }
// ));
// passport.authenticate('42');
class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    
    render() {
        return (
            <div>
                <h1>This is a view created by a class component</h1>
            </div>
        )
    }
}

export default Auth