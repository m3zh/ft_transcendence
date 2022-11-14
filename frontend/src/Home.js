import React from 'react';
import useToken from './Auth.js'
import Login from './Login.js'

function Home() {
    const { token, setToken } = useToken();

    if (token != {}) {
        return <Login setToken={setToken} />
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