import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='relative flex items-center justify-between font-roboto w-full max-w-screen-lg px-5 py-5 mx-auto'>
            <Link to="/" className='text-2xl uppercase'>Alex McKay</Link>
            <div className='flex justify-around'>
                <Link to="/about" className='p-4 hover:transition hover:translate-y-2 duration-500 ease-in-out'>About</Link>
                <Link to="/portfolio" className='p-4 hover:transition hover:translate-y-2 duration-500 ease-in-out'>Portfolio</Link>
                <Link to="/resume" className='p-4 hover:transition hover:translate-y-2 duration-500 ease-in-out'>Resume</Link>
                <Link to="/contact" className='p-4 hover:transition hover:translate-y-2 duration-500 ease-in-out'>Contact</Link>
            </div>
        </nav>
      );
}

export default Navigation;
