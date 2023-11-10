import React from 'react';
import logo from '../img/coins.png';

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className=" container navbar-brand px-5" href="#">
            <img src={logo} alt="Logo" width="50"  className="d-inline-block align-text-top" />
            Currency Watch
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

