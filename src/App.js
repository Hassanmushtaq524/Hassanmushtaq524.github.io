import './App.css';
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
// components
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import Work from './components/Work/Work';
import { AnimatePresence } from 'framer-motion';
function App() {
  
  const location = useLocation();
  return (
    <>
      <Navbar/>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/work" element={<Work/>}/>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
