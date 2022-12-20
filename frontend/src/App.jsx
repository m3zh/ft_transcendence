import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Home from './Home.jsx'
import Login from "./Login.jsx";
import NotFound from './NotFound.jsx'
import Pong from './pong/Pong.jsx'
import {AuthProvider} from "./contexts/index.jsx";

function App() {

  return (
        <Router >
            <AuthProvider>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/pong" component={Pong} />
                    <Route component={NotFound}/>
                </Switch>
            </AuthProvider>
        </Router>
  );
}

export default App
