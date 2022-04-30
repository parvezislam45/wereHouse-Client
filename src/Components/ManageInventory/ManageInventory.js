import React from 'react';
import useProduct from '../../Hook/Hook'
import AddInventory from '../AddInventory/AddInventory';
import BikeDetails from '../BikeDetails/BikeDetails';

const ManageInventory = () => {
    const [products,setProducts]=useProduct()
    return (
        <div className=' container mx-auto grid grid-cols-3 gap-5 mt-14 gap-y-10'>
            <h1>Manage Inventory {products.length}</h1>
            {
                products.map(product =><AddInventory
                key ={product._id}
                product = {product}
                
                ></AddInventory>)
            }
        </div>
    );
};

export default ManageInventory;