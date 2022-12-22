import {useContext} from 'react';
import Login from './Login.jsx'
import Profile from './Profile.jsx'
import {AuthContext} from "./contexts/index.jsx";

function Home() {
    const ctx = useContext(AuthContext);
    console.log("HOME: " + ctx.token)

    return (
        <>
            { ctx.token ?
                <Profile/>
                :
                <Login />
            }
        </>
    )
}

export default Home