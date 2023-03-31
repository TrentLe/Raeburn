import './App.scss'
import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Layout from './componenets/Layout';
import Home from './componenets/Home';
import LandingPage from './pages/landing';

const App = () => {
    return (
      <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<LandingPage />} />
      </Routes>
      </>
    
    );
};

export default App;