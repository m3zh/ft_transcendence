import './style/Profile.css'
import { useSelector } from "react-redux";

function Profile() {
    const user = useSelector((state) => state.userProvider.user);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="profile">
                            <div className="profile-header">
                                <div className="profile-header-content">
                                    <div className="profile-header-img">
                                        <img src={ user.avatar } alt=""/>
                                    </div>
                                    <div className="profile-header-info">
                                        <h4 className="m-t-10 m-b-5">{ user.username }</h4>
                                        <p className="m-b-10">UXUI + Frontend Developer</p>
                                        <a href="/home" className="btn btn-sm btn-info mb-2">Edit Profile</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                </div>
            </div>
        </>
    );
}

export default Profile;
