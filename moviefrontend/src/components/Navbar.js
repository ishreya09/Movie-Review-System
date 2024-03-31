import React from 'react';

const Navbar = () => {
    return (
<nav class="navbar navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand text-light" href="/">Movie Review : PES1UG21CS574</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-light" href="#">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">Movie-Review</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
};

export default Navbar;
