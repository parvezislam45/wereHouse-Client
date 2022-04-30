import React, { useState } from 'react';
import useProduct from '../../Hook/Hook';
import useInventory from '../../Hook/inventory';
import { addToDb } from '../../utilities/fakedb';
import BikeDetails from '../BikeDetails/BikeDetails';

const AllBikes = () => {
    const [products,setProducts]=useProduct()
    // const [inventory,setInventory] =useState([])
    // const handleInventory = (selectedProduct) => {
    //     console.log(selectedProduct);
    //     let newCart = [];
    //     const exists = inventory.find(product => product.id === selectedProduct.id);
    //     if (!exists) {
    //         selectedProduct.quantity = 1;
    //         newCart = [...inventory, selectedProduct];
    //     }
    //     else {
    //         const rest = inventory.filter(product => product.id !== selectedProduct.id);
    //         exists.quantity = exists.quantity + 1;
    //         newCart = [...rest, exists];
    //     }

    //     setInventory(newCart);
    //     addToDb(selectedProduct.id);
    // }
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