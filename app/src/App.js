// App.js
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Homepage.js';
import WebcamComponent from './components/WebcamComponent';
import LoginPage from './components/loginpage.js';
import HomePageAdmin from './components/Homepageadmin.js';
import Reguser from './components/reguserpg.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path = "/reguser" element={<Reguser/>}></Route>
        <Route path="/admin-home" element={<HomePageAdmin />} />
        <Route path="/mark-attendance" element={<WebcamComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
