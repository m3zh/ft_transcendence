import { React, useState } from 'react';
import Login from './Login.jsx'
import Profile from './Profile.jsx'

function Home() {
    const [ token, setToken ] = useState([]);

    console.log("Home");
    console.log(token);
    if (token.length === 1) {
        return <Login token={ token } setToken={ setToken } />
    }

    return (
        <Profile/>
    )
}

export default Home