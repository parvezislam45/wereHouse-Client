import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <h1 className='text-white'>Nav</h1>
            <div className="text-white">
            <Link>Home</Link>
            <Link>All Bike</Link>
            <Link>Inventory</Link>
            <Link>Blogs</Link>
            <Link>Sign up</Link>
            <Link>Login</Link>
            </div>
         
        </div>
    );
};

export default Nav;