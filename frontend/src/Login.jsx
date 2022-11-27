import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Auth } from './api/auth.ts';
import { routes } from './api/routes.ts'
//import { Strategy42 } from 'backend/src/auth/strategy42.service'
//import { UsersDto } from './api/dto/users.dto'


function Login() {

    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     console.log("Login");
        
    //     const token = fetch("http://localhost:3001/auth");
    //     console.log(token);
    //     setToken(token);
    //     return token;
    //}

        return (
            <div className="d-grid gap-2" >
                    <h1 className="font-weight-bold"> 42transcendence </h1>
                    <button onClick={() => (window.location.href = routes.login42)} type="submit" className="btn btn-dark btn-lg btn-block">Log in with 42</button>
            </div>
        );
    }

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }


export default Login
