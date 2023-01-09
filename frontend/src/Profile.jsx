import './style/Profile.css'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import Card from "./Card.jsx"
import EditProfile from "./EditProfile.jsx"

function Profile() {
    const user = useSelector((state) => state.userProvider.user);
    console.log(user)

    return (
        <>
        {
            user.first_login ?
                <EditProfile />
            :
            
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="profile">
                                <div className="profile-header">
                                    <div className="profile-header-content">
                                        <div className="profile-header-img">
                                            <img style={{ objectFit: "cover" }} className="img-fluid" src={ user.avatar } alt=""/>
                                        </div>
                                        <div className="profile-header-info">
                                            <h4 className="m-t-10 m-b-5">{ user.username }</h4>
                                            <p className="m-b-10">{ user.subtitle }</p>
                                            <Link to="/editProfile" className="btn btn-sm btn-info mb-2">Edit Profile</Link>
                                        </div>
                                        <div className="col position-absolute end-0">
                                            <Link to="/editProfile" className="btn btn-sm end-0 btn-success mx-2">Add Friend</Link>
                                            <Link to="/editProfile" className="btn btn-sm end-0 btn-danger mx-2">Block User</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container vh-100 my-5">
                        <div className="row h-100 justify-content-center mx-5">
                            <Card title="Users Status"/>
                            <Card title="Friends"/>
                            <Card title="Ranking"/>
                        </div>
                    </div>
                </div>
            
        }
        </>
    );
}

export default Profile;
