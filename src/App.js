import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login/Login';
import HomePage from './components/Home/Home'; 
import NotFoundPage from './components/NotFound/NotFoundPage'; 

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} /> {/* Handles unmatched routes */}
    </Routes>
  </Router>
);

export default App;
