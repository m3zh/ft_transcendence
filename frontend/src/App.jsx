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

function App() {

    return (
        <Router >
            <AuthProvider>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/pong" element={<Pong />} />
                    <Route component={NotFound}/>
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
