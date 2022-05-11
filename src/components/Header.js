import React from 'react';
import Navigation from './Navigation.js';

const Header = () => {
    return (
        <section className='fixed bg-opacity-50 top-0 w-full'>
            <Navigation />
        </section>
    );
}

export default Header;
