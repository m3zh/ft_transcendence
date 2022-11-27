import { React, useState } from 'react';
//import useToken from './Auth.js'
import Login from './Login.jsx'

function Home() {
    const [ token, setToken ] = useState([]);

    console.log("Home");
    console.log(token);
    if (token.length === 0) {
        return <Login token={ token } setToken={ setToken } />
    }

    return (
        <>
            <div className="">
                "HEY YOU THERE!!!"
            </div>
        </>
    )
}

export default Home