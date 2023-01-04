import './style/Profile.css'
import { useState, setState } from 'react';
import { useSelector } from "react-redux";
import jsCookie from "js-cookie"
import axios from 'axios';

function EditProfile() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    console.log(user)
    let [username, setUsername] = useState("");
    let [title, setTitle] = useState("");

    function onHandleUpdate(event) {
        event.preventDefault();
        console.log(user.login42)
        console.log(user)
        axios({
            url: "http://localhost:3001/users/" + user.intra_id,
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${jsCookie.get('jwt_token')}`,
            },
            body: username
        }).then(res => {
            console.log(res)
        }).catch(err => console.error(err))
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="profile">
                            <div className="profile-header">
                                <div className="profile-header-content">
                                    <h4 className="m-t-10 m-b-5">Profile Information</h4>
                                    <div className="profile-header-img">
                                        <img style={{ height: "100%"}} className="img-thumbnail" src={ user.avatar } alt=""/>
                                    </div>
                                    <div className="profile-header-info">
                                        <form>
                                            <label>Change your username</label><br></br>
                                            <input style={{ placeholderTextColor: "gray" }} className="m-t-10 m-b-5" placeholder={ user.username } onChange={ (e)=> setUsername(e.target.value) }/><br></br>
                                            <label>Wanna add a personal note?</label><br></br>
                                            <input className="m-t-10 m-b-5" placeholder="ex: the best player ever" onChange={ (e)=> setTitle(e.target.value) }/><br></br>
                                            <button type="submit" onClick={ (event) => onHandleUpdate(event) } className="btn btn-sm btn-warning mt-2">Update Profile</button>
                                        </form> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditProfile;
