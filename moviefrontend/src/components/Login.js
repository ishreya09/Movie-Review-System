import React, { useState } from 'react';
import axios from 'axios';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        if (!email || !password) return;
        const userInfo = {
            email: email,
            password: password
        };
        axios.post('http://localhost:4000/user/authenticate', userInfo)
            .then(response => {
                // Handle successful response
                console.log('Response:', response.data);
                if (Number(response.data) > 0){
                    // alert("Login successful")
                    // Store the email in a cookie
                    document.cookie = `email=${encodeURIComponent(email)}`; 
                    document.cookie = `userID=${encodeURIComponent(Number(response.data))}`;
                    window.location="/";

                }
                else{
                    alert("Login Unsuccessful")
                }
            })  
            .catch(error => {
                // Log the error for debugging
                console.log('Error:', error);
            });


    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Login</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} required />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                            </form>

                            <span className='text-muted'>Don't have an account? <a href="/register"> Register here</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
