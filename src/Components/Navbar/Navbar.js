import React, { useState } from 'react';
import { signOut } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebas.init';
import { Transition } from '@headlessui/react';

const Navbar = () => {

    const [user] = useAuthState(auth);
    console.log(user)
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className=' sticky top-0 z-50 shadow-sm'>
            <nav className="bg-dark py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between md:block">
                        <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 className='text-white name text-2xl'>David Bike WereHouse</h1>
                            </div>
                            <div className="hidden md:flex justify-between md:ml-auto">
                                <div className="nav-item ml-10 flex items-baseline space-x-4 text-lg text-white">
                                    <Link
                                        to="/"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to="/blog"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Blog
                                    </Link>

                                    <Link
                                        to="signup"
                                        className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Sign-Up
                                    </Link>

                                    {
                                        user && (
                                            <>
                                                

                                                <Link
                                                    to="orders"
                                                    className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                                >
                                                    My Items
                                                </Link>
                                            </>
                                        )
                                    }

                                    
                                </div>
                                {
                                    user ? <button onClick={handleSignOut} className='md:ml-24 text-white bg-[#6D9900] border-2 border-transparent hover:border-2 hover:border-[#6D9900] hover:bg-transparent hover:text-[#6D9900] transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-1 rounded-md'>Logout</button> : <button onClick={() => navigate('/login')} className='md:ml-24 text-white bg-[#6D9900] border-2 border-transparent hover:border-2 hover:border-[#6D9900] hover:bg-transparent hover:text-[#6D9900] transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-1 rounded-md'>Login</button>
                                }
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            {
                                user ? <button onClick={handleSignOut} className='md:ml-24 text-sm md:hidden block text-white bg-[#6D9900] border-2 border-transparent hover:border-2 hover:border-[#6D9900] hover:bg-transparent hover:text-[#6D9900] transition-all transition-duration:150ms font-medium hover:font-medium px-3 py-1 rounded-md'>Logout</button> : <button onClick={() => navigate('/login')} className='md:ml-24 text-sm md:hidden block text-white bg-[#6D9900] border-2 border-transparent hover:border-2 hover:border-[#6D9900] hover:bg-transparent hover:text-[#6D9900] transition-all transition-duration:150ms font-medium hover:font-medium px-3 py-1 rounded-md'>Login</button>
                            }
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 ml-5 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-800 transform"
                    enterFrom="opacity-0 scale-50"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="mobile-nav px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link
                                    to="/"
                                    className="hover:bg-gray-700 hover:text-white text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </Link>

                                {
                                    user && (
                                        <>

                                            <Link
                                                to="/orders"
                                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                            >
                                                My Items
                                            </Link>
                                        </>
                                    )
                                }

                                <Link
                                    to="/blog"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Blog
                                </Link>


                                <Link
                                    to="/signup"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    sign-Up
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
        
    );
};

export default Navbar;