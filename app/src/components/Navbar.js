import React from 'react';
import './Navbar.css'
export default function Navbar(props) {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <h5>AP & AP CORPORATION</h5>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto" style={{ marginRight: '300px' }}>
                            <li className="nav-item active">
                                <a className="nav-link" href="new_face.html">HOME </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="main.html">ABOUT US</a>
                            </li>
                        </ul>

                        {/* <form className="form-inline my-2 my-lg-0 justify-content-end">
                            <div className="input-group">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{ marginRight: '15px' }} />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </div>
                            </div>
                        </form> */}
                    </div>
                </nav>
            </div>
            <br /><br />
            <hr style={{ borderTop: '2px solid rgb(143, 101, 209)', width: '90%', display: 'block', margin: 'auto' }} />
            <br /><br />
        </>
    );
}
