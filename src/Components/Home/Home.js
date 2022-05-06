import React from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../Hook/Hook';
import Background from '../Background/Background';
import Carosel from '../Carosel/Carosel';
import HomeDetails from '../HomeDetails/HomeDetails';
import Location from '../Location/Location'

const Home = () => {
    const [products] = useProduct()
    return (
        <div>
            <Carosel></Carosel>
            <Background className='mx-8 bg-white'></Background>
            
            <h1 className='text-white text-3xl text-center mt-2 title2'>Our Product</h1>
            <div className=' mx-auto grid grid-cols-3 gap-5 mt-14 gap-y-10 bg-black'>
                {
                    products.slice(0, 6).map(product => <HomeDetails
                    key = {product._id}
                    product ={product}
                    ></HomeDetails>)
                }
            </div>
            <div>
            <Link className='justify-center' to="/inventory"> <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Go Inventory</button></Link>
            </div>
        </div>
    );
};

export default Home;