import React from 'react';
import './Navbar.css';

import logo from '../resources/logo.png';

export default function Navbar(props) {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
                    <img src={logo} alt="Logo" className="navbar-logo" />

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="new_face.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="main.html">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="main.html">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <h5 id="title"> AP & AP Corporation</h5>
                </nav>
            </div>
            <br /><br />
        </>
    );
}
