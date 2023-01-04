import { useDispatch, useSelector } from "react-redux";
import { routes } from "./api/routes.ts";
import { useCallback, useEffect } from "react";
import { setCurrentUser, setToken } from "./providers/userProvider.js";

function Navbar() {
    const loggedIn = useSelector((state) => state.userProvider.token);
    const dispatch = useDispatch();

    const onHandleClick = useCallback((event) => {
        event.preventDefault();
        window.location.href = routes.logout;
    }, []);

    useEffect(() => {
            dispatch(setToken(''));
            dispatch(setCurrentUser(''));
    }, [onHandleClick]);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="./">42</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/play">Play</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/chat">Chat</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-grey" type="submit">Search</button>
                        </form>
                        {
                            loggedIn.length ?
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={ (event) => onHandleClick(event) }>Log Out</a>
                                    </li>
                                </ul>
                                :
                                <></>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar