import { useEffect, useCallback } from "react";
import { routes } from './api/routes'
import jsCookie from "js-cookie";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { setToken,setCurrentUser } from "./providers/userProvider";
import { RootState } from "./providers/store";

function Login() {
    const user = useSelector((state: RootState) => state.userProvider.user);
    const dispatch = useDispatch();

    const onHandleSubmit = useCallback((event) => {
        event.preventDefault();
        console.log("lol")
        window.location.href = routes.login;
    }, []);

    useEffect(() => {
        if (jsCookie.get('jwt_token')) {
            console.log("cookies")
            dispatch(setToken(jsCookie.get('jwt_token')));
            const decoded = jwtDecode<any>(jsCookie.get('jwt_token'));
            if (!user["login42"]) {
                axios({
                        url: "http://localhost:3001/users/" + decoded.login42,
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${jsCookie.get('jwt_token')}`,
                        }
                }).then(res => {
                    dispatch(setCurrentUser(res.data));
                }).catch(err => console.error(err))
            }
        }
    }, [onHandleSubmit, dispatch, user]);

    return (
        <div className="App d-flex align-items-center justify-content-center">
            <div className="d-grid gap-2" >
                <h1 className="font-weight-bold"> 42transcendence </h1>
                <button onClick={ (event) => {
                    onHandleSubmit(event)
                } }
                        type="submit"
                        className="btn btn-dark btn-lg btn-block">
                    Log in with 42
                </button>
            </div>
        </div>
    );
}

// () => arrow function gets evaluated when clicking on the button
// {} function gets evaluated as soon as the page is rendered

export default Login;
