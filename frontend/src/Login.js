import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Auth } from './api/auth.ts'
//import { UsersDto } from './api/dto/users.dto'


//    // https://api.intra.42.fr/oauth/

// async function loginUser( ) {
//   try
//   {
//     await fetch('https://api.intra.42.fr/oauth/v2', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify( )
//     }).then()
//   } catch(err) {
//     console.log(err);
//   }
// }
    

function Login() {
    const [data, setData] = useState([]);

    const handleSubmit = async e => {
        e.preventDefault();
        console.log("Login");
        const data = await Auth.logIn();
        console.log(data);
        setData(data);
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

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }


export default Login
