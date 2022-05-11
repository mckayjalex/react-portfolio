import React from 'react';
import resume from './assets/files/alex-mckay-resume.pdf'

function Resume() {

    return (
        <div className='h-screen bg-gray-200 pt-32 sahdow flex justify-center items-start'>
            <div className='p-4 bg-white shadow w-2/3 rounded'>
                <div className='flex justify-between'>
                    <h2 className='pl-4 text-xl underline underline-offset-4'>SUMMARY</h2>
                    <a href={resume} className="shadow hover:shadow-inner bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded " download>
                            Download
                        </a>
                </div>
                <p className='p-4'>Passionate to build technical solutions to complex problems</p>
                <h2 className='pl-4 text-xl underline underline-offset-4'>SKILLS</h2>
                <ul className='p-4'>
                    <li><span className='font-bold text-lg'>Frontend:</span> React, JavaScript, CSS3, HTML5</li>
                    <li><span className='font-bold text-lg'>Backend:</span> Node.js, Express.js</li>
                    <li><span className='font-bold text-lg'>Database:</span> MySQL, MongoDB & GraphQL</li>
                    <li><span className='font-bold text-lg'>Other Frameworks / Libraries:</span> Bootstrap, Tailwind CSS, jQuery, sequelize, mongoose</li>
                    <li><span className='font-bold text-lg'>Other:</span> Git, Heroku, OOP, Algorithms & Data Structures, System integrations using APIs</li>
                </ul>
                <h2 className='pl-4 text-xl underline underline-offset-4'>EDUCATION</h2>
                <h3 className='pt-4 pl-4 font-bold text-lg underline underline-offset-2'>Full stack web development 2021 - present</h3>
                <p className='pl-4'>Coding Bootcamp at University of Adelaide</p>
                <p className='pb-4 pl-4'>The program focused on gaining technical programming skills in web technologies like: React, Express.js Node.js, MongoDB. This also includes implementing technical solutions using MVC architecture and Object-oriented Programming principles.</p>

            </div>
        </div>
    )
}

export default Resume;