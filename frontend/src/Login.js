import React, { useCallback, useState } from "react";
import PropTypes from 'prop-types';

//    // https://api.intra.42.fr/oauth/



export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    return (
            <div >
                <form class="d-grid gap-2">

                    <h3> 42transcendence </h3>

                    <div className="form-group">
                        <label>Login</label>
                        <input type="email" className="form-control" placeholder="Enter your 42 login" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    <button type="button" className="btn btn-dark btn-lg btn-block">Log in</button>
                </form>
            </div>
        );

    Login.propTypes = {
        setToken: PropTypes.func.isRequired
    }
}