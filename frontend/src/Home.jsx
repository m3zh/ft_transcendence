import { React, useState } from 'react';
import Login from './Login.jsx'
import Profile from './Profile.jsx'
import Navbar from './Navbar.jsx'
import * as session from "express-session";
import Cookies from 'js-cookie';

function Home() {
    const [ token, setToken ] = useState();

    //setToken(Cookies);
    console.log(Cookies.Session);
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