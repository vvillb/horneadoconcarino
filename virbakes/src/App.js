import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home.js';
import Products from './components/pages/products/Products';
import Custom from './components/pages/custom/Custom';
import Contact from './components/pages/ContactForm';
import Footer from './components/Footer';
import { useEffect } from 'react';
import Alfajores from './components/pages/products/productpgs/Alfajores';
import Cheesecake from './components/pages/products/productpgs/Cheesecake';
import SuperCookies from './components/pages/products/productpgs/SuperCookies';
import Cinammon from './components/pages/products/productpgs/Cinammon';
import Brownie from './components/pages/products/productpgs/Brownie';
import BizcochoDatiles from './components/pages/products/productpgs/BizcochoDatiles';

//to update changes run: npm run deploy


function App() {
  useEffect(()=>{
    window.scrollTo(0,0);
  
  },[])
  return (
    
    <>
    <Router forceRefresh={true} basename='/horneadoconcarino'>
      <Navbar/>
     
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>}/>
      <Route path='/custom' element={<Custom/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/Products/productpgs/Alfajores' element={<Alfajores/>}/>
      <Route path='/Products/productpgs/Cheesecake' element={<Cheesecake/>}/>
      <Route path='/Products/productpgs/SuperCookies' element={<SuperCookies/>}/>
      <Route path='/Products/productpgs/Cinammon' element={<Cinammon/>}/>
      <Route path='/Products/productpgs/Brownie' element={<Brownie/>}/>
      <Route path='/Products/productpgs/BizcochoDatiles' element={<BizcochoDatiles/>}/>
      <Route path='/Products/productpgs/Brownie' element={<Brownie/>}/>
      <Route path='/Products/productpgs/Brownie' element={<Brownie/>}/>
      <Route path='/Products/productpgs/Brownie' element={<Brownie/>}/>
      <Route path='/Products/productpgs/Brownie' element={<Brownie/>}/>
      <Route path='/Products/productpgs/Brownie' element={<Brownie/>}/>
      <Route path='/Products/productpgs/Brownie' element={<Brownie/>}/>
      <Route path='/Products/productpgs/Brownie' element={<Brownie/>}/>
      <Route path='/Products/productpgs/Brownie' element={<Brownie/>}/>
      <Route path='/Products/productpgs/Brownie' element={<Brownie/>}/>





      </Routes>
       <Footer/>
      
    </Router>
     
    </> 
  );
}

export default App;
