import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/MyNavbar';
import Home from './components/Home';
import Booking from './components/Booking';
import Menu from './components/Menu';
import Details from './components/Details';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div>
    <BrowserRouter>
      <MyNavbar brand="Strivestaurant" />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<h1>PROFILE PAGE</h1>} />
        <Route path='/reservations' element={<Booking />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/details/:pastaId' element={<Details />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
