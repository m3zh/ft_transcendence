import React, { useState } from "react";
import PropTypes from 'prop-types';
//import { get42Url } from 'backend/src/user/42oauth.controller.ts';


//    // https://api.intra.42.fr/oauth/

async function loginUser( ) {
  try
  {
    const res = await fetch('https://api.intra.42.fr/oauth/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( )
    }).then()
  } catch(err) {
    console.log(err);
  }
}
    

function Login({ setToken }) {

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({});
        console.log(token);
        setToken(token);
    }

    return (
            <div >
                <form className="d-grid gap-2" onSubmit={handleSubmit}>

                    <h1 className="font-weight-bold"> 42transcendence </h1>
                      <button type="submit" className="btn btn-dark btn-lg btn-block">Log in with 42</button>
                </form>
            </div>
        );
    }

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}


export default Login
