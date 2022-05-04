import React, { useState } from 'react';
import useProduct from '../../Hook/Hook';

const AddInventory = ({ product }) => {
    const {_id, name, img, price, description, seller, quantity, sold } = product
    const [products,setProducts] = useProduct();
    const [reload,setReload] =useState(false);
    const handleDelate = id =>{
        
            const url = `http://localhost:7000/product/${id}`
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })
        }

    return (
        <div className='drop-shadow-2xl '>
            <div className='max-w-sm text-center'>
                <img className='rounded-lg border-solid border-2 border-sky-500' src={img} alt="" />
                <div className="p-5">
                    <h5 className="mb-2 name text-white text-2xl font-medium tracking-tight dark:text-white">Name : {name}</h5>
                    <p className="text-white text-justify mb-3 font-normal  dark:text-gray-400 details">Description : {description}</p>
                    <div className="item">
                    <h6 className='text-xl font-bold text-white'>Id : {_id}</h6>
                    <h5 className='text-xl font-bold text-white'>Seller : {seller}</h5>
                    <h3 className='text-xl font-bold text-white'>Quantity : {quantity}</h3>
                    <h2 className='text-xl font-bold text-white'>Price : ${price}</h2>
                    </div>
                    <button  onClick={()=>handleDelate(product._id)} type="button" class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Dalevered</button>
                </div>
            </div>

        </div>
        // <div className=' container mx-auto grid grid-cols-3 gap-5 mt-14 gap-y-10'>
        //     <h1 className='text-center text-white'>Mange Item {product.id}</h1>
        //     <button onClick={()=>delivered}><span className='text-white'>Delivered</span></button>
        // </div>
    );
};

export default AddInventory;