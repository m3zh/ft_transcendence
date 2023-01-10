import React, {useContext} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Navbar from "./Navbar.jsx";
import Home from './Home.jsx'
import Dashboard from './Dashboard.jsx'
import Profile from './Profile.jsx'
import EditProfile from "./EditProfile";
import Pong from './pong/Pong.jsx'
import NotFound from './NotFound.jsx'


function App() {

    return (
        <Router >
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/users/:id" element={<Profile />} />
                    <Route path="/editprofile" element={<EditProfile />} />
                    <Route path="/pong" element={<Pong />} />
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
        </Router>
    );
}

export default App;
