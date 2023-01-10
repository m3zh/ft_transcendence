import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
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
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/editprofile" element={<EditProfile />} />
                    <Route path="/pong" element={<Pong />} />
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
        </Router>
    );
}

export default App;
