// "rfce" : a shortcut to get the react functional component with ES7 module system
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from "./LoginValidation";
import axios from 'axios';

function Login(){
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors]=useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:3308/login', values)
            .then(res => {
                if(res.data === "Success"){
                    navigate('/home');
                }else{
                    alert("No record found!");
                }
                
            })
            .catch(err => console.log(err));
        }
    }
    return(
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25">
            <h2>Sign-In</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Email" name="email"
                        onChange = {handleInput} className="form-control rounded-0"/>
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" name="password"
                        onChange = {handleInput} className="form-control rounded-0"/>
                        {errors.password && <span className="text-danger">{errors.password}</span>}

                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">Log in</button>
                    <p>You are agreed to our terms and conditions</p>
                    <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Create Account</Link>

                </form>
            </div>
            {/* <p>You are agreed to our terms and conditions</p> */}
        </div>
    )
}

export default Login