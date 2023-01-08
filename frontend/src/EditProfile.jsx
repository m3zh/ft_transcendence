import './style/Profile.css'
import { useState, setState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import jsCookie from "js-cookie"
import axios from 'axios';
import Avatar from 'react-avatar-edit'
import { useNavigate } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import { setCurrentUser } from './providers/userProvider';

function EditProfile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userProvider.user);
    let avatar = useSelector((state) => state.userProvider.user.avatar);
    const MAX_SIZE = 711680;
    let [username, setUsername] = useState(user.username);
    let [title, setTitle] = useState("");
    let [preview, setPreview] = useState(avatar);

    const onHandleUpdate = async(event) => {
        event.preventDefault();
        
        let blob = null
        let mimeType = null
        let file = null
        const image = new FormData()

        //console.log(preview)
        // axios(preview)
        //     .then(res => {
        //         blob = res.data;
        //         mimeType = res.headers["content-type"] // png, jpeg...
        //         file = new File([preview], "avatar_file", { type: mimeType });
        //         image.append('image', file)
        //         axios({
        //             url: "http://localhost:3001/profils/avatar",
        //             method: "POST",
        //             headers: {
        //                 'Content-Type': 'multipart/form-data',
        //                 Authorization: `Bearer ${jsCookie.get('jwt_token')}`,
        //             },
        //             data: image 
        //         }).then(res => {
    
                    avatar = preview;
                    axios({
                        url: "http://localhost:3001/users/" + user.intra_id,
                        method: "PATCH",
                        headers: {
                            Authorization: `Bearer ${jsCookie.get('jwt_token')}`,
                        },
                        data: { username, avatar }
                    }).then(res => {
                        // console.log("resrersrers")
                        // console.log(res.data)
                        dispatch(setCurrentUser(res.data))
                        sessionStorage.setItem('user', JSON.stringify(res.data));
                        navigate("/")
                    }).catch(err => console.error(err))
            //     })
            // })
    }
      
    function onClose()          {    setPreview(null);       }
    function onCrop(preview)    {    setPreview(preview);  }


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
                                                <img style={{ objectFit: "cover" }} className="img-fluid"  src={ preview } alt="Preview"/>
                                                :
                                                <img style={{ objectFit: "cover" }} className="img-fluid" src={ user.avatar } alt="Preview"/>
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
                                            scale={1.2}
                                            src={ avatar }
                                            alt="Avatar"
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
