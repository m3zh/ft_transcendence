import { React, useState } from 'react';
//import useToken from './Auth.js'
import Login from './Login.jsx'

function Home() {
    const { token, setToken } = useState(0);

    console.log("Home");
    console.log(token);
    if (token === undefined) {
        return <Login />
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