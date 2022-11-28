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
import { ThemeProvider } from './contexts';

function App() {

  return (
        <Router >
          <ThemeProvider>         
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route component={NotFound}/>
          </Switch>

          </ThemeProvider>
        </Router>
  );
}

export default App
