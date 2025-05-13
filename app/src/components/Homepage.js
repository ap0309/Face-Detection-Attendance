import React from 'react';
// import '../App.css';
import CustomCard from './Card';
import Navbar from './Navbar';
import markp from '../resources/markp.jpg';
// import './css/Homepage.css';
// import styles from './css/loginpage.module.css'
function HomePage() {
    return (
        <>

            <Navbar></Navbar>
            <div className="eventheader row row-cols-1 row-cols-md-3 g-4 justify-content-center align-items-center">
                <div className="col text-center mb-3 mb-md-0">
                    <CustomCard src={markp} title="Mark Attendance" btnctn="Click Here" to="/mark-attendance" />
                </div>
            </div>


        </>

    );
}

export default HomePage;
