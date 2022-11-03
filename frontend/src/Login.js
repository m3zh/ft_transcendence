import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <div >
                <form class="d-grid gap-2">

                    <h3> 42transcendence </h3>

                    <div className="form-group">
                        <label>Login</label>
                        <input type="email" className="form-control" placeholder="Enter your 42 login" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    <button type="button" className="btn btn-dark btn-lg btn-block">Log in</button>
                </form>
            </div>
        );
    }
}