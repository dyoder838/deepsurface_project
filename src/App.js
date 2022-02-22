import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../src/pages/Main';
import DashBoard from '../src/pages/DashBoard';


function App() {
  return (
    <Router>

      <Routes>

        <Route exact path="/" element={<MainPage />} />;
        <Route exact path="/dashboard" element={<DashBoard />} />;
        
      </Routes>

    </Router>
  );
}

export default App;
