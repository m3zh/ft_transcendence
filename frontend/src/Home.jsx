import {useContext} from 'react';
import Login from './Login.jsx'
import Profile from './Profile.jsx'
import Navbar from './Navbar.jsx'
import {AuthContext} from "./contexts/index.jsx";

function Home() {
    const cxt = useContext(AuthContext);
    console.log(cxt.token)
    if ( !cxt.token ) {
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