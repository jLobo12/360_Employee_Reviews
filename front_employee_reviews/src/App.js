import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
