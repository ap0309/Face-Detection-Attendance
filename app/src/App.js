import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import WebcamComponent from './components/WebcamComponent'; // Import the WebcamComponent
import markp from './resources/markp.jpg';
import reguser from './resources/reguser.jpg';
import db from './resources/database.jpg';

function App() {
  const [showWebcam, setShowWebcam] = useState(false); // State to toggle webcam view

  const handleMarkAttendanceClick = () => {
    setShowWebcam(true); // Show webcam when "Mark Attendance" is clicked
  };

  const handleCloseWebcam = () => {
    setShowWebcam(false); // Close webcam
  };

  return (
    <>
      <Navbar />
      <div className="eventheader row row-cols-1 row-cols-md-3 g-4 justify-content-center align-items-center">
        <div className="col text-center mb-3 mb-md-0">
          <Card src={reguser} title="Register New User" btnctn="Click Here" />
        </div>
        <div className="col text-center mb-3 mb-md-0">
          <Card src={markp} title="Mark Attendance" btnctn="Click Here" onClick={handleMarkAttendanceClick} />
        </div>
        <div className="col text-center">
          <Card src={db} title="Access Live  Database" btnctn="Click Here" />
        </div>
      </div>
      {showWebcam && <WebcamComponent onClose={handleCloseWebcam} />}
    </>
  );
}

export default App;
