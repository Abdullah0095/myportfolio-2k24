import React from 'react';
import { Link } from 'react-router-dom';

const HomeMainBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen mt-[-80px] bg-black">
                <div className="hero-content grid md:grid-cols-2 py-12">
                    <div className='text-black font-serif md:mx-4'>
                        <div className='text-animation'>
                            <h1 className=' text-5xl m-2'>I'm, <br /> ABDULLAH AL MIZAN</h1>
                            <h3 className='text-xl mx-2'>Front-end Web Developer || MERN Developer</h3>
                        </div>
                        <div>
                            <button className="m-2 btn btn-outline btn-warning">Download Resume</button>
                            <Link to='projects'><button className="m-2 btn btn-outline btn-success">Projects</button></Link>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeMainBanner;