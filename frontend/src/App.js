import React, { Component }  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Home from './Home.js'
import Auth from './Auth.js'

function App() {
  return (
    <>
      <div className="App">
        <Router >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/auth">
              <Auth />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App
