
  import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Cart from './page/Cart';
import Card from './page/Card';

const MyRoutes = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/card" element={<Card/>}/>




    </Routes>
    </BrowserRouter>
    </>
  )
}

export default MyRoutes