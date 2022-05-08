import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='relative flex items-center justify-between text-white font-roboto w-full max-w-screen-lg px-5 py-5 mx-auto'>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
        </nav>
      );
}

export default Navigation;
