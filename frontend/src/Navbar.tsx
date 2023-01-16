import { useDispatch, useSelector } from "react-redux";
import { routes } from "./api/routes";
import { useCallback, useEffect } from "react";
import { setCurrentUser, setToken } from "./providers/userProvider";
import { Link } from "react-router-dom"
import { RootState } from "./providers/store";
import SearchBar from "./Searchbar";

function Navbar() {
    const loggedIn = useSelector((state: RootState) => state.userProvider.token);
    const dispatch = useDispatch();
    console.log(loggedIn)
    console.log("loggedIn")

    const onHandleClick = useCallback((event) => {
        event.preventDefault();
        window.location.href = routes.logout;
    }, []);

    useEffect(() => {
            dispatch(setToken(''));
            dispatch(setCurrentUser(''));
    }, [onHandleClick, dispatch]);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="./">42</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/pong">Play</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/chat">Chat</Link>
                            </li>
                        </ul>
                        
                        {
                            loggedIn ?    
                            <>
                                <button type="button" className="btn btn-secondary position-relative mx-3">
                                    &#128276;
                                    <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                        <span className="visually-hidden">alert</span>
                                    </span>
                                </button>
                                <SearchBar/>
                                <ul className="navbar-nav mx-2 mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to="*" className="nav-link" onClick={ (event) => onHandleClick(event) }>Log Out</Link>
                                    </li>
                                </ul>
                            </>
                            :
                            <div></div>
                        }                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar