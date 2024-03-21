// App.js
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage.js';
import WebcamComponent from './components/WebcamComponent';
import LoginPage from './components/Loginpage.js';
import HomePageAdmin from './components/Homepageadmin.js'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/admin-home" element={<HomePageAdmin />} /> {/* Use the admin home page component */}
        <Route path="/mark-attendance" element={<WebcamComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
