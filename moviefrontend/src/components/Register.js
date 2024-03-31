import React, { useState } from 'react';
import axios from 'axios';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

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
            name: name,
            email: email,
            password: password
        };
        axios.post('http://localhost:4000/user/add', userInfo)
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
                    alert("Register Unsuccessful")
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
                            <h2 className="card-title text-center mb-4">Sign Up</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="name" className="form-control" id="name" value={name} onChange={handleNameChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} required />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Register</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
