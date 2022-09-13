import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Trending from './components/Trending';
import Feature from './components/Feature';
import All from './components/images/All'
import Shoes from './components/images/Shoes'
import './App.css'


export default function Home() {
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
        {/* <All /> */}
        {/* <Shoes/> */}
        <Contact/>
        <Footer/>
        {/* <About /> */}
       
       </div>
    )
  }
