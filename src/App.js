import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.js';
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Contact from './components/pages/Contact.js';
import Portfolio from './components/pages/Portfolio.js';
import Resume from './components/pages/Resume.js';
import Footer from './components/Footer.js';

const App = () => {
    return (
      <div className='font-roboto'>
        <Router>
          <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<div><About /><Footer /></div>}/>
                <Route path="/portfolio" element={<div><Portfolio /><Footer /></div>}/>
                <Route path="/resume" element={<div><Resume /><Footer /></div>}/>
                <Route path="/contact" element={<div><Contact /><Footer /></div>}/>
            </Routes>
        </Router>
      </div>
    );
}

export default App;