import React from 'react';
import deleteCookie from './deletecookie'

const Logout = () => {
    const handleLogout = () => {
        // Delete cookies
        deleteCookie("email");
        deleteCookie("userID");

        // Redirect to login page or any other desired location
        window.location = '/login';
    };

    return (
        <li>
            <a onClick={handleLogout} className="nav-link text-light" href="/login">Logout</a>
        </li>
    );
};

export default Logout;
