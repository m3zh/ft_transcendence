import React, { useState }  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Home from './Home.js'
import Login from './Login.js'
import useToken from './Auth.js'
import NotFound from './NotFound.js'

function App() {

  return (
      <div className="App d-flex align-items-center justify-content-center">
        <Router >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </div>
  );
}

export default App
