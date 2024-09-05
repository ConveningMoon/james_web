import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import TestConnection from './components/TestConnection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/test" element={<TestConnection />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
