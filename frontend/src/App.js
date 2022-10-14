import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './Home.js'

function App() {
  return (
    <>
      <div className="App">
        <Router >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App
