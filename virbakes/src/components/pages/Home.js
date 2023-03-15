import React from 'react';
import'../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import '../HeroSection.css'
import { useEffect } from 'react';
function Home(){
    useEffect(()=>{
        window.scrollTo(0,0);
      
      },[])
    return(
        <>
        <HeroSection/>
        <Cards/>
        </>
    );
}

export default Home;