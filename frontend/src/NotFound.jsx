import React, {useContext} from 'react';
import {AuthContext} from "./contexts/index.jsx";

function NotFound() {
    const ctx = useContext(AuthContext);
    console.log(ctx);

    return (
        <>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
            <div className="error-header"> </div>
            <div className="container ">
                <section className="error-container text-center">
                    <h1>404</h1>
                    <div className="error-divider">
                        <h2>PAGE NOT FOUND.</h2>
                        <p className="description">We Couldn't Find This Page</p>
                    </div>
                    <a href="/" className="return-btn"><i className="fa fa-home"></i>Home</a>
                </section>
            </div>
        </>
    )
}

export default NotFound