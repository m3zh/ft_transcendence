import './style/Profile.css'
import { useState, setState } from 'react';
import { useSelector } from "react-redux";
import jsCookie from "js-cookie"
import axios from 'axios';
import Avatar from 'react-avatar-edit'

function EditProfile() {
    const user = useSelector((state) => state.userProvider.user);
    const src = useSelector((state) => state.userProvider.user.avatar);
    console.log(src)
    const MAX_SIZE = 711680;
    let [username, setUsername] = useState("");
    let [title, setTitle] = useState("");
    let [preview, setPreview] = useState(null);
    console.log(preview)

    function onHandleUpdate(event) {
        event.preventDefault();
        axios({
            url: "http://localhost:3001/users/" + user.intra_id,
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${jsCookie.get('jwt_token')}`,
            },
            data: { username }
        }).then(res => {
            console.log("resrersrers")
            console.log(res.data)
            sessionStorage.setItem('user', JSON.stringify(res.data))
            window.location = "http://localhost:3000/";
        }).catch(err => console.error(err))
    }

      
    function onClose()          {    setPreview(null);       }
    function onCrop(preview)    {    setPreview(preview);  }
    function onBeforeFileLoad(elem) {
        if (elem.target.files[0].size > MAX_SIZE) {
          alert("File size too big!");
          elem.target.value = "";
        };
      }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="profile">
                            <div className="profile-header">
                                <div className="profile-header-content row align-items-start">
                                    <h4 className="m-10">Profile Information</h4>
                                    
                                    <div className='col'> 
                                        <div className="profile-header-img">
                                            {
                                                preview ?
                                                <img style={{ height: "100%"}} className="img-thumbnail" src={ preview } alt="Preview"/>
                                                :
                                                <img style={{ height: "100%"}} className="img-thumbnail" src={ user.avatar } alt="Preview"/>
                                            }
                                        </div>
                                        <div className="profile-header-info">
                                            <form>
                                                <label>Change your username</label><br></br>
                                                <input style={{ placeholderTextColor: "gray" }} className="m-t-10 m-b-5" placeholder={ user.username } onChange={ (e)=> setUsername(e.target.value) }/><br></br>
                                                <label>Wanna add a personal note?</label><br></br>
                                                <input className="m-t-10 m-b-5" placeholder="ex: the best player ever" onChange={ (e)=> setTitle(e.target.value) }/><br></br>
                                                <button type="submit" onClick={ (event) => onHandleUpdate(event) } className="btn btn-sm btn-warning mt-3">Update Profile</button>
                                            </form> 
                                        </div>
                                    </div>

                                    <div className='col'>                                    
                                        <Avatar
                                            width={390}
                                            height={295}
                                            onCrop={onCrop}
                                            onClose={onClose}
                                            onBeforeFileLoad={onBeforeFileLoad}
                                            src={src}
                                            alt=""
                                        />
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
