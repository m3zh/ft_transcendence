import React, { useState } from "react";
import { routes } from './api/routes.ts'

function Login() {

        return (
            <div className="App d-flex align-items-center justify-content-center">
                <div className="d-grid gap-2" >
                    <h1 className="font-weight-bold"> 42transcendence </h1>
                    <button onClick={() => (window.location.href = routes.login42)} type="submit" className="btn btn-dark btn-lg btn-block">Log in with 42</button>
                </div>
            </div>
        );
    }


export default Login
