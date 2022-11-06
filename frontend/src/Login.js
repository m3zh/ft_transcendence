import React, { useState } from "react";
import PropTypes from 'prop-types';

//    // https://api.intra.42.fr/oauth/

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
    }

export default function Login({ setToken }) {
    const [username, setUserName] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username
        });
        setToken(token);
    }

    return (
            <div >
                <form className="d-grid gap-2" onSubmit={handleSubmit}>

                    <h3> 42transcendence </h3>

                    <div className="form-group">
                        <label>Login</label>
                        <input type="email" className="form-control" placeholder="Enter your 42 login" onChange={e => setUserName(e.target.value)}/>
                    </div>
                    <button type="button" className="btn btn-dark btn-lg btn-block">Log in</button>
                </form>
            </div>
        );
    }

    Login.propTypes = {
        setToken: PropTypes.func.isRequired
    }
