import React from 'react';
import github from './assets/logos/github.png'
import linkedin from './assets/logos/linkedin.png'
import email from './assets/logos/email.png'

const Footer = () => {
    return (
        <section className='fixed bottom-4 h-12 py-6 w-full flex justify-center items-center'>
                <a href='https://github.com/mckayjalex' target="_blank" rel='noreferrer' className='w-6 cursor-pointer hover:opacity-50 rounded-full'>
                    <img src={github} alt="Github" />
                </a>
                <a href='https://www.linkedin.com/in/alex-mckayy/' target="_blank" rel='noreferrer' className='w-6 mx-12 cursor-pointer hover:opacity-50 rounded-full'>
                    <img src={linkedin} alt="Linkedin" />
                </a>
                <a href='mailto:alexjosephmckay@gmail.com' className='w-6 flex justify-center py-2 cursor-pointer hover:opacity-50 rounded-full'>
                    <img src={email} alt="Email" />
                </a>
        </section>
    );
}
export default Footer;