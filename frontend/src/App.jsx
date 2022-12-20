import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Home from './Home.jsx'
import NotFound from './NotFound.jsx'
import Pong from './pong/Pong.js'
import {AuthProvider} from "./contexts/index.jsx";

function App() {

  return (
        <Router >
            <AuthProvider>
                <Switch>
                    <Route exact path="/">
                      <Home />
                    </Route>
                      <Route exact path="/pong">
                          <Pong />
                      </Route>
                    <Route component={NotFound}/>
                </Switch>
            </AuthProvider>
        </Router>
  );
}

export default App
