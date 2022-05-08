import React from 'react';

const Background = () => {
    return (
        <div>
            <div className='bg-[#FCF4E0]'>
                    <div className="inner flex flex-col items-center justify-center bg-banner h-40 ">
                        <marquee behavior="alternative" direction="left"><span className='text-rose-400 header text-5xl font-medium pt-6'>David Bike WereHouse</span></marquee>
                        <h1 className='header text-5xl font-medium mb-6'><span className='text-cyan-300'>Parvez Islam</span></h1>
                        <h1 className='header2 text-6xl font-medium mb-16'><span className='text-yellow-400'>Visit Our WereHouse to Collect Your Dream Bike</span></h1>
                        
<form class="flex items-center">
<label for="voice-search" class="sr-only">Search</label>
<div class="relative w-full">
<div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
<svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
</div>
<input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-60 p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Here " required=""/>
<button type="button" class="flex absolute inset-y-0 right-0 items-center pr-7">
<svg class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path></svg>
</button>
</div>
<button type="submit" class="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><svg class="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search</button>
</form>

                    </div>
                </div>
        </div>
    );
};

export default Background;