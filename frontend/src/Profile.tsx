import './style/Profile.css'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useEffect, useState, FC } from 'react';
import { RootState } from './providers/store';
import axios from 'axios';
import Dashboard from './Dashboard';
import LoadingPage from './LoadingPage'
import jsCookie from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify';

const Profile: FC = () => {

    type currentUserPrototype = {
        blacklist?: Array<string>
    }

    let currentUser: currentUserPrototype = {}
    currentUser = useSelector((state: RootState) => state.userProvider.user);
    console.log(currentUser)
    const params = useParams();
    const navigate = useNavigate();
    const [blocked, setBlocked] = useState(currentUser.blacklist.includes(params.id))
    const [user, setUser] = useState(null)
    
    function onBlockUser() {
        if (blocked) {
            axios({
                url: "http://localhost:3001/users/block/delete/" + params.id,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${jsCookie.get('jwt_token')}`,
                }
            })
            .then(
                u => {
                    setUser(u.data)
                    
            }).catch(e => {
                toast.error(e);
            })
        } else {
            axios({
                url: "http://localhost:3001/users/block/add/" + params.id,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${jsCookie.get('jwt_token')}`,
                }
            })
            .then(
                u => {
                    setUser(u.data)
                    
            }).catch(e => {
                toast.error(e);
            })
        }
    }

    useEffect(() => {
        axios({
                url: "http://localhost:3001/users/" + params.id,
                method: "GET",
                headers: {
                    Authorization: `Bearer ${jsCookie.get('jwt_token')}`,
                }
            })
            .then(
                u => {
                    setUser(u.data)
            }).catch(e => {
                toast.error(e);
            })
    }, [user, navigate, params.id])

    if (!user || !currentUser)
        return (<LoadingPage/>)

    return (
        <>
        {   
            currentUser["intra_id"] === params.id ?
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
                                        <h4 className="m-t-10 m-b-5">{ user["username"] }
                                            <span className="mx-5">
                                                <button className="btn btn-sm top-0 end-0 btn-success mx-2">Add Friend</button>
                                                <button onClick={ onBlockUser } className="btn btn-sm top-0 end-0 btn-danger mx-2">
                                                    {   blocked ? "Unblock" : "Block User"  }
                                                </button>
                                            </span>
                                        </h4>
                                        { 
                                            user["title"] ?
                                            <h6 className="m-b-10 fst-italic">{ user["title"] }</h6>
                                            :
                                            <h6 className="m-b-10 fst-italic">[No title...]</h6>
                                        }
                                        { user["mail"] && <h6 className="m-b-10">MP: { user["mail"] }</h6> }                                   
                                        
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
