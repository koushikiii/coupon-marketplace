// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BuyCoupons from './pages/BuyCoupons';
import SellCoupons from './pages/SellCoupons';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/BuyCoupons" element={<BuyCoupons />} />
        <Route path="/SellCoupons" element={<SellCoupons />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
