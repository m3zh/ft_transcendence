import React from "react";
import Card from './Card.jsx';
import './style/Profile.css'

function Profile({ user }) {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="profile">
                                <div className="profile-header">
                                    <div className="profile-header-content">
                                    <div className="profile-header-img">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/>
                                    </div>
                                    <div className="profile-header-info">
                                        <h4 className="m-t-10 m-b-5">Sean Ngu</h4>
                                        <p className="m-b-10">UXUI + Frontend Developer</p>
                                        <a href="/home" className="btn btn-sm btn-info mb-2">Edit Profile</a>
                                    </div>
                                    </div>
                                </div>          
                        </div>              
                    </div>            
                </div>
                <div className="row">
                    <Card/>
                </div>
            </div>
            </>
    );
}

export default Profile