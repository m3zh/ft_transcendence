import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { FC } from "react";
import 'react-toastify/dist/ReactToastify.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Navbar from "./Navbar";
import Home from './Home'
import Dashboard from './Dashboard'
import Profile from './Profile'
import EditProfile from "./EditProfile";
import Pong from './pong/Pong'
import NotFound from './NotFound'
import GameMenu from "./pong/GameMenu";


const App: FC = () =>  {

    return (
        <Router >
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/users/:id" element={<Profile />} />
                    <Route path="/editprofile" element={<EditProfile />} />
                    <Route path="/play" element={<GameMenu />} />
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
        </Router>
    );
}

export default App;
