import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.js';
import Home from './components/pages/Home.js';
import About from './components/pages/About.js';
import Contact from './components/pages/Contact.js';
import Portfolio from './components/pages/Portfolio.js';
import Resume from './components/pages/Resume.js';

const App = () => {
    return (
      <div>
        <Router>
          <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/portfolio" element={<Portfolio />}/>
                <Route path="/resume" element={<Resume />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </Router>
      </div>
    );
}

export default App;