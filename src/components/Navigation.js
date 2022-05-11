import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [currentPage, setCurrentPage] = useState('');

    return (
        <nav className='relative flex items-center justify-between font-roboto px-5 py-5 mx-24'>
            <Link to="/" onClick={() => setCurrentPage("/")} className='text-2xl uppercase'>Alex McKay</Link>
            <div className='flex justify-around'>
                <Link to="/about" onClick={() => setCurrentPage('about')} className={`p-4 hover:transition hover:translate-y-2 duration-500 ease-in-out ${currentPage === 'about' ? 'font-bold text-2xl' : ""}`}>About</Link>
                <Link to="/portfolio" onClick={() => setCurrentPage('portfolio')} className={`p-4 hover:transition hover:translate-y-2 duration-500 ease-in-out ${currentPage === 'portfolio' ? 'font-bold text-2xl' : ""}`}>Portfolio</Link>
                <Link to="/resume" onClick={() => setCurrentPage('resume')} className={`p-4 hover:transition hover:translate-y-2 duration-500 ease-in-out ${currentPage === 'resume' ? 'font-bold text-2xl' : ""}`}>Resume</Link>
                <Link to="/contact" onClick={() => setCurrentPage('contact')} className={`p-4 hover:transition hover:translate-y-2 duration-500 ease-in-out ${currentPage === 'contact' ? 'font-bold text-2xl' : ""}`}>Contact</Link>
            </div>
        </nav>
      );
}

export default Navigation;
