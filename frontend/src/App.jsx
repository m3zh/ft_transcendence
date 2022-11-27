import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import NotFound from './NotFound.jsx'
import { ThemeProvider } from './contexts';

function App() {

  return (
        <Router >
          <ThemeProvider>
          <Navbar />
          <div className="App d-flex align-items-center justify-content-center">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route component={NotFound}/>
          </Switch>
          </div>
          </ThemeProvider>
        </Router>
  );
}

export default App
