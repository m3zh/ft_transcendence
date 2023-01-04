import React, {useContext} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Home from './Home.jsx'
import Login from "./Login.jsx";
import NotFound from './NotFound.jsx'
import Pong from './pong/Pong.jsx'
import {AuthProvider} from "./providers/index.jsx";
import Navbar from "./Navbar.jsx";
import EditProfile from "./EditProfile";

function App() {

    return (
        <Router >
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/editprofile" element={<EditProfile />} />
                    <Route path="/pong" element={<Pong />} />
                    <Route component={NotFound}/>
                </Routes>
        </Router>
    );
}

export default App;
