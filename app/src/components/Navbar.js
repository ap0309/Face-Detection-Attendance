import React from 'react';
import './Navbar.css';

import logo from '../resources/logo.png';

export default function Navbar(props) {
    return (
        <>
            <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">

                    <div className="d-flex align-items-center">
                        <img src={logo} alt="Logo" className="navbar-logo" />
                    </div>

                    <h5 id="titlem"> AP & AP Corporation</h5>

                    <button
                        className="navbar-toggler ml-auto btn-light"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
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

                        <h5 id="title">
                             <div className="ap1">AP&nbsp;</div> 
                             <div className="and"> &&nbsp; </div> 
                             <div className="ap2">AP&nbsp;</div>
                             <div className="corporation">Corporation</div>

                        </h5>

                    </div>

                </nav>
            </div>
            <br /><br />
        </>
    );
}
