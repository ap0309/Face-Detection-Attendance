import React from 'react';
import './Navbar.css';

// Import your logo image
import logo from '../resources/logo.png';

export default function Navbar(props) {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
                    <img src={logo} alt="Logo" className="navbar-logo" />


                    <h5>AP & AP CORPORATION</h5>


                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto" style={{ marginLeft: '100px' }}>
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
            {/* <hr style={{ borderTop: '2px solid rgb(143, 101, 209)', width: '90%', display: 'block', margin: 'auto' }} /> */}
            <br /><br />
        </>
    );
}
