import './App.scss'
import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Layout from './componenets/Layout';
import Home from './componenets/Home';
import LandingPage from './pages/landing';
import HomePage from './pages/home';
import ResumePage from './pages/resume';

const App = () => {
    return (
      <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/" element={<Layout />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Resume" element={<ResumePage />} />
      </Routes>
      </>
    
    );
};

export default App;