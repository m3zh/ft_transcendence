import { React, useState } from 'react';
import Login from './Login.jsx'
import Profile from './Profile.jsx'
import Navbar from './Navbar.jsx'

function Home() {
    const [ user, setUser ] = useState();

    console.log("Home");
    console.log(user);
    if (!user) {
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