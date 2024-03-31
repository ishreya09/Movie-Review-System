import React from 'react';
import Logout from './Logout';
import getCookie from './getcookie';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="/">Movie Review : PES1UG21CS574</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* check if cookie has an email */}
                        {
                            getCookie('userID') === null || getCookie('userID') === "null"?
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="/login">Login</a>
                                </li>
                                :
                                <Logout />
                        }
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/movie-list">Movie-Review</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
