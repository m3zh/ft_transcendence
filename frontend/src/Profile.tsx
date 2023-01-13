import './style/Profile.css'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useEffect, useState, FC } from 'react';
import { RootState } from './providers/store';
import Card from "./Card"
import NotFound from './NotFound';
import axios from 'axios';
import Dashboard from './Dashboard';
import { ToastContainer, toast } from 'react-toastify';

const Profile: FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const currentUser = useSelector((state: RootState) => state.userProvider.user);
    const [user, setUser] = useState(null)
    

    useEffect(() => {
        axios.get("http://localhost:3001/users/" + params.id)
            .then(
                u => {
                    setUser(u.data)
                    console.log(u.data)
            }
            ).catch(e => {
                toast.error(e);
                navigate('404')
            })
    }, [user])

    if (!user)
        return (<div>Loading</div>)

    return (
        <>
        {   
            currentUser["intra_id"] == params.id ?
                <Dashboard />
            :
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="profile">
                            <div className="profile-header">
                                <div className="profile-header-content">
                                    <div className="profile-header-img">
                                        <img style={{ objectFit: "cover" }} className="img-fluid" src={ user["avatar"] } alt=""/>
                                    </div>
                                    <div className="profile-header-info">
                                        <h4 className="m-t-10 m-b-5">{ user["username"] }</h4>
                                        <p className="m-b-10">{ user["subtitle"] }</p>
                                        <Link to="/editProfile" className="btn btn-sm end-0 btn-success mx-2">Add Friend</Link>
                                        <Link to="/editProfile" className="btn btn-sm end-0 btn-danger mx-2">Block User</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        <ToastContainer autoClose={500}/>
        </>
    );
}

export default Profile;
