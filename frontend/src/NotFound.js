import React  from 'react';

function NotFound() {
    return (
        <>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
            <div class="error-header"> </div>
            <div class="container ">
                <section class="error-container text-center">
                    <h1>404</h1>
                    <div class="error-divider">
                        <h2>PAGE NOT FOUND.</h2>
                        <p class="description">We Couldn't Find This Page</p>
                    </div>
                    <a href="/" class="return-btn"><i class="fa fa-home"></i>Home</a>
                </section>
            </div>
        </>
    )
}

export default NotFound