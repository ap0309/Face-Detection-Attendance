import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import markp from './resources/markp.jpg';
import reguser from './resources/reguser.jpg';
import db from './resources/database.jpg';

function App() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const handleCardHover = (index) => {
    setHoveredCard(index);
  };
  const handleCardMouseOut = () => {
    setHoveredCard(null);
  };

  return (
    <div className={`App ${hoveredCard ? `card${hoveredCard}-hovered` : ''}`}>
      <Navbar />
      <div className="eventheader row row-cols-1 row-cols-md-3 g-4 justify-content-center align-items-center">
        <div className="col text-center mb-3 mb-md-0">
          <Card src={reguser} title="Register New User" btnctn="Click Here" onMouseOver={() => handleCardHover(1)} onMouseOut={handleCardMouseOut} />
        </div>
        <div className="col text-center mb-3 mb-md-0">
          <Card src={markp} title="Mark Attendance Here" btnctn="Click Here" onMouseOver={() => handleCardHover(2)} onMouseOut={handleCardMouseOut} />
        </div>
        <div className="col text-center">
          <Card src={db} title="Access Database" btnctn="Click Here" onMouseOver={() => handleCardHover(3)} onMouseOut={handleCardMouseOut} />
        </div>
      </div>
    </div>
  );
}

export default App;
