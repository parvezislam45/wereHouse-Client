import React from 'react';
import img from '../../../src/gghhh.png'

const Background = () => {
    return (
        <div>
            <div className='bg-[#FCF4E0]'>
                    <div className="inner flex flex-col items-center justify-center bg-banner">
                        <h1 className='header text-7xl font-medium mb-12'><span className='text-rose-400'>David Bike WereHouse</span></h1>
                        <h1 className='header text-5xl font-medium mb-12'><span className='text-cyan-300'>Parvez Islam</span></h1>
                        <h1 className='header2 text-6xl font-medium mb-16'><span className='text-yellow-400'>Visit Our WereHouse to Collect Your Dream Bike</span></h1>
                        <div className="input-field -mb-8 border-pink-300">
                            <input className=' input py-2 border-pink-300 border-solid px-3 w-1/2 rounded-full banner-input' type="text" />
                            <button className='bg-red-500 rounded-full text-white px-8 py-2 -ml-8'>Search</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Background;