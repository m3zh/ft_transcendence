import { useContext } from 'react';
import Login from './Login.jsx'
import Profile from './Profile.jsx'
import { AuthContext } from "./providers/index.jsx";

function Home() {
    const ctx = useContext(AuthContext);

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