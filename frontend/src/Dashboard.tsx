import './style/Profile.css'
import { FC } from "react";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { RootState } from './providers/store';
import Card from "./Card"
import EditProfile from "./EditProfile"

const Dashboard: FC = () =>  {
    const user = useSelector((state: RootState) => state.userProvider.user);

    return (
        <>
        {
            user["first_login"] ?
                <EditProfile />
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
                                            { user["title"] && <h6 className="m-b-10 fst-italic">{ user["title"] }</h6> }
                                            { user["mail"] && <h6 className="m-b-10">MP: { user["mail"] }</h6> } 
                                            <Link to="/editProfile" className="btn btn-sm btn-info mt-2">Edit Profile</Link>
                                            <Link to="/editProfile" className="btn btn-sm float-end btn-success mt-2 mx-2">Start Game</Link>
                                            <Link to="/editProfile" className="btn btn-sm float-end btn-danger mt-2">Start Chat</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container vh-100 my-5">
                        <div className="row h-100 justify-content-center mx-5">
                            <Card title="Users status"/>
                            <Card title="Friends"/>
                            <Card title="Ranking"/>
                        </div>
                    </div>
                </div>
            
        }
        </>
    );
}

export default Dashboard;
