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
      <div className="eventheader">
        <Card src={reguser} title="Register New User" btnctn="Click Here" className="card" onMouseOver={() => handleCardHover(1)} onMouseOut={handleCardMouseOut} />
        <Card src={markp} title="Mark Attendance Here" btnctn="Click Here" className="card" onMouseOver={() => handleCardHover(2)} onMouseOut={handleCardMouseOut} />
        <Card src={db} title="Access Database" className="card" btnctn="Click Here" onMouseOver={() => handleCardHover(3)} onMouseOut={handleCardMouseOut} />
      </div>
    </div>
  );
}

export default App;
