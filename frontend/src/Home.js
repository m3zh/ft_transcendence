import React from 'react';
//import useToken from './Auth.js'
import Login from './Login.js'

function Home() {
    //const { token, setToken } = useToken();

    console.log("Home");
    // console.log(token);
    if (2 % 2 === 0) {
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