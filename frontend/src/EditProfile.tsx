import './style/Profile.css'
import { useState, FC } from 'react';
import { useSelector, useDispatch } from "react-redux";
import jsCookie from "js-cookie"
import axios from 'axios';
import Avatar from 'react-avatar-edit'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { setCurrentUser } from './providers/userProvider';
import { RootState } from './providers/store';

const EditProfile: FC = () =>  {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.userProvider.user);
    let avatar = useSelector((state: RootState) => state.userProvider.user["avatar"]);
    let [username, setUsername] = useState(user["username"]);
    let [title, setTitle] = useState(user["title"]);
    let [mail, setMail] = useState(user["mail"]);
    let [preview, setPreview] = useState(avatar);

    const onHandleUpdate = async(event) => {
        event.preventDefault();
        
        // let blob = null
        // let mimeType = null
        // let file = null
        // const image = new FormData()

        if (mail && mail.length)
        {
            const reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w\w+)+$/;
            if (reg.test(mail) === false)  {
                toast.error("Mail format not valid"); return ;
            }
        }
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
                    const first_login = false
                    avatar = preview;
                    axios({
                        url: "http://localhost:3001/users/" + user["intra_id"],
                        method: "PATCH",
                        headers: {
                            Authorization: `Bearer ${jsCookie.get('jwt_token')}`,
                        },
                        data: { username, avatar, first_login, mail, title }
                    }).then(res => {
                        toast.success("Success!", { position: toast.POSITION.TOP_RIGHT });
                        dispatch(setCurrentUser(res.data))
                        sessionStorage.setItem('user', JSON.stringify(res.data));
                        navigate("/")
                    }).catch(err => toast.error(err, { position: toast.POSITION.TOP_RIGHT }))
            //     })
            // })
    }
      
    function onClose()          {    setPreview(null);       }
    function onCrop(preview)    {    setPreview(preview);  }


    return (
        <>
            <div className="container">
                {
                    user["first_login"] ?
                        <div className="row profile-header mt-5">
                            <div className="profile-header-content row align-items-start">
                                <h1 className="m-10 text-center">Welcome to the platform!</h1>
                                <h3 className="m-10 text-center">Tell us something about yourself</h3>
                            </div>
                        </div>
                    :
                    null
                }
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
                                                <img style={{ objectFit: "cover" }} className="img-fluid" src={ user["avatar"] } alt="Preview"/>
                                            }
                                        </div>
                                        <div className="profile-header-info">
                                            <form>
                                                <label>Change your username</label><br></br>
                                                <input className="m-t-10 m-b-5" placeholder={ user["username"] } onChange={ (e)=> setUsername(e.target.value) }/><br></br>
                                                <label>Wanna add a personal note?</label><br></br>
                                                <input maxLength={32} className="m-t-10 m-b-5" placeholder={ user["title"] } onChange={ (e)=> setTitle(e.target.value) }/><br></br>
                                                <label>Wanna change email?</label><br></br>
                                                <input className="m-t-10 m-b-5" placeholder={ user["mail"] } onChange={ (e)=> setMail(e.target.value) }/><br></br>                                               
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
                                            src={ avatar }
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={1000}/>
        </>
    );
                                        
}

export default EditProfile;
