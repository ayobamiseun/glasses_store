import React from 'react';
import Home from './Home'
import About from './components/About'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'


export default function App() {
    return (
       <div>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
       </div>
    )
  }
  