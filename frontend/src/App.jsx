import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Home from './Home.jsx'
import NotFound from './NotFound.jsx'
import {AuthProvider} from "./providers/index.jsx";
import Navbar from "./Navbar.jsx";
import EditProfile from "./EditProfile";
import GameMenu from "./pong/GameMenu.jsx";

function App() {

    return (
        <Router >
            <AuthProvider>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/editprofile" element={<EditProfile />} />
                    <Route path="/play" element={<GameMenu />} />
                    <Route component={NotFound}/>
                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;
