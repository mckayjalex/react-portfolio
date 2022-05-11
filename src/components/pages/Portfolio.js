import React from 'react';


function Portfolio() {
    return (
        <div className='pt-32 pb-20 px-52 bg-gradient-to-r from-teal-500 h-screen gap-4 grid grid-cols-2 grid-rows-2'>
            <div className='bg-sortameal bg-cover cursor-pointer h-full w-full object-cover rounded'>
                <div className='h-full w-full bg-black rounded opacity-0 hover:opacity-90 transition-all ease-in-out duration-500 flex justify-center items-center'>
                    <a href="https://github.com/mckayjalex/sort-a-meal" target="_blank" rel='noreferrer' className="shadow hover:bg-teal-100 hover:text-black bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-4 rounded" type="button">
                        GitHub
                    </a>
                    <a href="https://mckayjalex.github.io/sort-a-meal/index.html" target="_blank" rel='noreferrer' className="shadow hover:bg-teal-100 hover:text-black bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-4 rounded" type="button">
                        Site
                    </a>
                </div>
            </div>
            <div className='bg-techblog bg-cover cursor-pointer object-cover h-full w-full rounded'>
                <div className='h-full w-full bg-black rounded opacity-0 hover:opacity-90 transition-all ease-in-out duration-500 flex justify-center items-center'>
                    <a href="https://github.com/mckayjalex/tech-blog" target="_blank" rel='noreferrer' className="shadow hover:bg-teal-100 hover:text-black bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-4 rounded" type="button">
                        GitHub
                    </a>
                    <a href="https://shrouded-river-38098.herokuapp.com/" target="_blank" rel='noreferrer' className="shadow hover:bg-teal-100 hover:text-black bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-4 rounded" type="button">
                        Site
                    </a>
                </div>
            </div>
            <div className='bg-codequiz bg-cover cursor-pointer h-full object-cover rounded'>
                <div className='h-full w-full bg-black rounded opacity-0 hover:opacity-90 transition-all ease-in-out duration-500 flex justify-center items-center'>
                    <a href="https://github.com/mckayjalex/code-quiz" target="_blank" rel='noreferrer' className="shadow hover:bg-teal-100 hover:text-black bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-4 rounded" type="button">
                        GitHub
                    </a>
                    <a href="https://mckayjalex.github.io/code-quiz/" target="_blank" rel='noreferrer' className="shadow hover:bg-teal-100 hover:text-black bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-4 rounded" type="button">
                        Site
                    </a>
                </div>
            </div>
            <div className='bg-guru bg-cover cursor-pointer h-full object-cover rounded'>
                <div className='h-full w-full bg-black rounded opacity-0 hover:opacity-90 transition-all ease-in-out duration-500 flex justify-center items-center'>
                    <a href="https://github.com/AshWeston/PROJECT2" target="_blank" rel='noreferrer' className="shadow hover:bg-teal-100 hover:text-black bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-4 rounded" type="button">
                        GitHub
                    </a>
                    <a href="https://guru-heroku-deploy.herokuapp.com/" target="_blank" rel='noreferrer' className="shadow hover:bg-teal-100 hover:text-black bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mx-4 rounded" type="button">
                        Site
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;