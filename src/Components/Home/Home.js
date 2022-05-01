import React from 'react';
import useProduct from '../../Hook/Hook';
import BikeDetails from '../BikeDetails/BikeDetails';
import Carosel from '../Carosel/Carosel';

const Home = () => {
    const [products]=useProduct()
    return (
        <div>
            <Carosel></Carosel>
            <h1 className='text-white text-3xl text-center mt-2'>Our Product</h1>
            <div className=' mx-auto grid grid-cols-3 gap-5 mt-14 gap-y-10 bg-black'>
        {
            products.slice(0, 9).map(product =><BikeDetails
            key ={product._id}
            product ={product}
            ></BikeDetails>)
        }
        </div>
        </div>
    );
};

export default Home;