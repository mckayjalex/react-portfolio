import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.js';
import About from './components/pages/About.js';
import Contact from './components/pages/Contact.js';
import Portfolio from './components/pages/Portfolio.js';
import Resume from './components/pages/Resume.js';

const App = () => {
    return (
      <div>
        <Header />
        <Router>
            <Routes>
                <Route path="/about" exact>
                    <About />
                </Route>
                <Route path="/portfolio" exact>
                    <Portfolio />
                </Route>
                <Route path="/resume" exact>
                    <Resume />
                </Route>
                <Route path="/contact" exact>
                    <Contact />
                </Route>
            </Routes>
        </Router>
      </div>
    );
}

export default App;