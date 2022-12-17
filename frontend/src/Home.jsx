import { React, useState } from 'react';
import Login from './Login.jsx'
import Profile from './Profile.jsx'
import Navbar from './Navbar.jsx'
import * as session from "express-session";

function Home() {
    const [ token, setToken ] = useState();

    //setToken(session.Cookie);
    console.log("Home");
    if (!token) {
        return <Login />
    }

    return (
        <>
            <Profile/>
            <Navbar/>
        </>
    )
}

export default Home