import React from 'react';
import useProduct from '../../Hook/Hook';
import BikeDetails from '../BikeDetails/BikeDetails';
import Carosel from '../Carosel/Carosel';

const Home = () => {
    const [products]=useProduct()
    return (
        <div>
            <Carosel></Carosel>
            <div className=' container mx-auto grid grid-cols-3 gap-5 mt-14 gap-y-10'>
        {
            products.slice(0, 6).map(product =><BikeDetails
            key ={product._id}
            product ={product}
            ></BikeDetails>)
        }
        </div>
        </div>
    );
};

export default Home;