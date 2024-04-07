import React from "react";
import { Link } from "react-router-dom";

function Signup() {
    return(
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Sign-Up</h2>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Name" className="form-control rounded-0"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Email" className="form-control rounded-0"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" className="form-control rounded-0"/>
                    </div>
                    <button className="btn btn-success w-100 rounded-0">Sign Up</button>
                    <p>You are agreed to our terms and conditions</p>
                    <Link to="/" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>

                </form>
            </div>
            <p>You are agreed to our terms and conditions</p>
        </div>
    )
}
export default Signup
