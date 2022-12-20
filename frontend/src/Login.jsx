import { useContext, useEffect, useCallback } from "react";
import { AuthContext } from "./contexts/index.jsx";
import { routes } from './api/routes.ts'
import jsCookie from "js-cookie";

function Login() {
    const cxt = useContext(AuthContext);

    const onHandleSubmit = useCallback((event) => {
        event.preventDefault();
        window.location.href = routes.login42;
    }, []);

    useEffect(() => {
        if (jsCookie) {
            cxt.setToken(jsCookie.get('jwt_token'));
        }
    }, [onHandleSubmit, cxt]);

    return (
        <div className="App d-flex align-items-center justify-content-center">
            <div className="d-grid gap-2" >
                <h1 className="font-weight-bold"> 42transcendence </h1>
                <button onClick={(event) => onHandleSubmit(event) }
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
