import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Home from './Home.js'
import Navbar from './Navbar.js'
import NotFound from './NotFound.js'
import Pong from './pong/Pong.js'

function App() {

  return (
      
        <Router >
          <Navbar />
          <div className="App d-flex align-items-center justify-content-center">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
              <Route exact path="/pong">
                  <Pong />
              </Route>
            <Route component={NotFound}/>
          </Switch>
          </div>
        </Router>
      
  );
}

export default App
