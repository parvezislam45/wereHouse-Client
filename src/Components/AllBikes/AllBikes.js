import React, { useState } from 'react';
import useProduct from '../../Hook/Hook';
import BikeDetails from '../BikeDetails/BikeDetails';

const AllBikes = () => {
    const [products,setProducts]=useProduct()
    return (
        <div className=' container mx-auto grid grid-cols-3 gap-5 mt-14 gap-y-10'>
        {
            products.map(product =><BikeDetails
            key = {product._id}
            product ={product}
            ></BikeDetails>)
        }
        </div>
    );
};

export default AllBikes;