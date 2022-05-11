import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section id='about' className='bg-gradient-to-r from-gray-500 flex pr-96 flex-col justify-around py-60 items-center h-screen bg-white top-0 mx-auto'>
            <div className='font-roboto font-bold text-6xl'>
                <h1>Full Stack Developer</h1>
            </div>
            <div className='pb-6'>
                <p>"Passionate to build technical solutions to complex problems"</p>
            </div>
            <div>
                <Link to="/portfolio" className="shadow bg-teal-500 hover:bg-teal-400 hover:outline hover:outline-offset-4 focus:shadow-outline focus:outline-none text-white font-bold py-4 px-6 mx-6 rounded-2xl">Portfolio</Link>
                <a href='https://github.com/mckayjalex' target='blank' className='shadow bg-teal-500 hover:bg-teal-400 hover:outline hover:outline-offset-4 text-white font-bold py-4 mx-6 px-6 rounded-2xl'>GitHub</a>
            </div>
        </section>
    )
}

export default Home;