import './style/Profile.css'
import { useSelector } from "react-redux";
import Card from "./Card.jsx"

function Profile() {
    const user = useSelector((state) => state.userProvider.user);
    console.log(user)

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="profile">
                            <div className="profile-header">
                                <div className="profile-header-content">
                                    <div className="profile-header-img">
                                        <img style={{ height: "100%"}} className="img-thumbnail" src={ user.avatar } alt=""/>
                                    </div>
                                    <div className="profile-header-info">
                                        <h4 className="m-t-10 m-b-5">{ user.username }</h4>
                                        <p className="m-b-10">{ user.subtitle }</p>
                                        <a href="/editProfile" className="btn btn-sm btn-info mb-2">Edit Profile</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- <div className="row">
                    <Card title="Users Online"/>
                </div> --> */}
            </div>
        </>
    );
}

export default Profile;
