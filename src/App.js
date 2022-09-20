import React from 'react';
import Home from './Home'
import About from './components/About';
import Cart from './components/images/Cart';
import Blue from './components/images/blue'
import Kids from './components/images/kids'
// import Light from './components/images/light'
import { Routes, Route, Link } from "react-router-dom";
// import './App.css'


export default function App() {
    return (
       <div>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/shop' element={<Blue />}/>
        <Route path='/kid' element={<Kids />}/>
        {/* <Route path='/lit' element={<Light />}/> */}
      </Routes>
       </div>
    )
  }
  