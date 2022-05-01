import React from 'react';
import { useNavigate } from 'react-router-dom';

const BikeDetails = ({ product }) => {
    const { _id, name, img, price, description, seller, quantity, sold } = product;
    const navigate = useNavigate()
    const goToInventory = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='drop-shadow-2xl '>
            <div className='max-w-sm text-center'>
                <img className='rounded-lg border-solid border-2 border-sky-500' src={img} alt="" />
                <div className="p-5">
                    <h5 className="mb-2 text-white text-2xl font-medium tracking-tight dark:text-white">Name : {name}</h5>
                    <p className="text-white text-justify mb-3 font-normal  dark:text-gray-400">Description : {description}</p>
                    <h5 className='text-xl font-bold text-white'>Seller : {seller}</h5>
                    <h3 className='text-xl font-bold text-white'>Quantity : {quantity}</h3>
                    <h3 className='text-xl font-bold text-white'>Sold : {sold}</h3>
                    <h2 className='text-xl font-bold text-white'>Price : ${price}</h2>

                    <button className='border-solid border-2 border-sky-500' onClick={() => goToInventory(_id)}><span className='text-white'>Go to Inventory</span></button>
                </div>
            </div>

        </div>
    );
};

export default BikeDetails;