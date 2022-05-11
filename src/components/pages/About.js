import React from 'react';
import portrait from './assets/portrait.png';

function About() {
    return (
        <section id='about' className='mx-12 h-screen bg-white top-0 grid grid-cols-2'>
            <div className='mx-12'>
                <div className='text-left pl-4 pt-32 font-roboto font-bold text-6xl'>
                    <h1 className='underline decoration-teal-500/30 underline-offset-8'>About</h1>
                </div>
                <p className='px-4 py-8 font-roboto'>
                    
                    Hi, I'm Alex.
                    <br />
                    <br />
                    I am a 27yo currently enrolled in the University of Adelaide Coding Bootcamp,
                    set to graduate on the 8th of june!
                    <br />
                    <br />
                    After 7 years of being in the Telecommication industry, I thought it was time to move on, as a child I had a lot of intrest with technology and even for my year 12 project at school I did Web Development.
                    Fast forward 7 years and I finally took the leap to study Coding fulltime.
                    <br />
                    <br />
                    Some of my other intrest include sport and spending time with family and friends
                    <br />
                    <br />
                    With the goal of becoming a Full Stack Web Developer in mind, I Encourage you to use the contact links provided to get in touch or contact me <a className='underline' href="/contact">here!</a>

                </p>
            </div>
            <div className='flex items-center justify-center'>
                <img src={portrait} className="rounded-full h-1/2" alt="Portrait" />
            </div>
        </section>
    )
}

export default About;