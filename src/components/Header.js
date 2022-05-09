import React from 'react';
import Navigation from './Navigation.js';

const Header = () => {
    return (
        <section className='fixed bg-opacity-50 z-10 top-0 w-full shadow-sm'>
            <Navigation />
        </section>
    );
}

export default Header;
