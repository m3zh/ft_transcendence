import React from 'react';
import useToken from './Auth.js'
import Login from './Login.js'

function Home() {
    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />
    }
    console.log(token);
    return (
        <>
            <div className="">
                "HEY"
            </div>
        </>
    )
}

export default Home