import React from 'react';
import './Navbar.css';

import logo from '../resources/logob.png';

export default function Navbar(props) {
    return (
        <>
            <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <div className="d-flex align-items-center">
                        <img src={logo} alt="Logob" className="navbar-logo" />
                        <h5 id="title">
                            <div className="ap1">AP&nbsp;</div>
                            <div className="and"> &&nbsp; </div>
                            <div className="ap2">AP&nbsp;</div>
                            <div className="corporation">Corporation</div>
                        </h5>
                    </div>

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

                    <div className="links collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
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

                </nav>
            </div>
            <br /><br />
        </>
    );
}
