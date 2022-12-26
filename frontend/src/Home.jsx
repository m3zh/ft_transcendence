import Login from './Login.jsx'
import Profile from './Profile.jsx'
import { useSelector } from "react-redux";
import Navbar from "./Navbar.jsx";
import React from "react";

function Home() {
    const jwt = useSelector((state) => state.userProvider.token);

    return (
        <>
            { jwt.length ?
                    <Profile/>
                :
                <Login />
            }
        </>
    )
}

export default Home;