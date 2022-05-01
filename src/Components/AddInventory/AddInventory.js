import React from 'react';

const AddInventory = ({ product }) => {
    const {_id, name, img, price, description, seller, quantity, sold } = product
    const delivered = () => {

    }
    return (
        <div className='drop-shadow-2xl '>
            <div className='max-w-sm text-center'>
                <img className='rounded-lg border-solid border-2 border-sky-500' src={img} alt="" />
                <div className="p-5">
                    <h5 className="mb-2 text-white text-2xl font-medium tracking-tight dark:text-white">Name : {name}</h5>
                    <p className="text-white text-justify mb-3 font-normal  dark:text-gray-400">Description : {description}</p>
                    <h6 className='text-xl font-bold text-white'>Id : {_id}</h6>
                    <h5 className='text-xl font-bold text-white'>Seller : {seller}</h5>
                    <h3 className='text-xl font-bold text-white'>Quantity : {quantity}</h3>
                    <h3 className='text-xl font-bold text-white'>Sold : {sold}</h3>
                    <h2 className='text-xl font-bold text-white'>Price : ${price}</h2>
                    <button onClick={()=>delivered}><span className='text-white'>Delivered</span></button>
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