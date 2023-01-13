import Login from './Login'
import Dashboard from './Dashboard'
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import React from "react";
import { RootState } from './providers/store';

function Home() {
    const jwt = useSelector((state: RootState) => state.userProvider.token);

    return (
        <>
            { jwt.length ?
                <Dashboard/>
                :
                <Login />
            }
        </>
    )
}

export default Home;