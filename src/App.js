import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from '../src/pages/Main';
import DashBoard from '../src/pages/DashBoard';
import NavBar from './components/NavBar'


function App() {
  return (
    <Router>

      <NavBar />

      <Routes>

        <Route exact path="/" element={<MainPage />} />;
        <Route exact path="/dashboard" element={<DashBoard />} />;

      </Routes>

    </Router>

  );
}

export default App;
