import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/mainpage'; 
import Aboutus from './Pages/aboutus';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rute utama untuk MainPage */}
        <Route path="/" element={<MainPage />} />
        <Route path="/aboutus" element={<Aboutus />} />
        {/* Rute untuk 404 */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;