import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Trending from './components/Trending';
import Feature from './components/Feature';
import All from './components/images/All'
import Shoes from './components/images/Shoes'
import './App.css'


export default function App() {
    return (
       <div>
        <Header/>
        <Hero> 
        {/* hello */}
        {/* <Text /> */}
        </Hero>
        {/* <Text /> */}
        <Trending />
        <Feature/>
        <All />
        {/* <Shoes/> */}
       </div>
    )
  }
  