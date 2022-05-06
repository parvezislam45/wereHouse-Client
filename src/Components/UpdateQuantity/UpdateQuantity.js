import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useServiceDetails from '../../Hook/useProductDetails';

const UpdateQuantity = () => {
    const {id} =useParams();
    const [product,setProduct] = useServiceDetails(id)
    const [isReload,setIsreload] =useState(false)
    useEffect(()=>{
        const url = `http://localhost:7000/product/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[isReload])
    const handleAdd = e => {
        e.preventDefault()
        const quantity = e.target.quantity.value
        const newQuantity = parseInt(quantity)+parseInt(product?.quantity)
        console.log(newQuantity)
        const updateItem = {newQuantity}
        if(!quantity){
            toast('Quantity Added SuccessFully')
        }
        else{
            const url = `http://localhost:7000/user/${id}`;
        fetch(url,{
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updateItem)
        })
        .then(res => res.json())
        .then (result =>{
            setIsreload(!isReload)
            e.target.reset()
            // setItems(result);
        })
        }
        
    };

    const delevary = e => {
       
        const quantity = product?.quantity
        const updateItem = {quantity}
        const url = `http://localhost:7000/delivery/${id}`;
        fetch(url,{
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updateItem)
        })
        .then(res => res.json())
        .then (result =>{
            console.log(result)
            setIsreload(!isReload)
            // setItems(result);
        })
            
        
    };
    return (
        <div>
            <h1 className='text-white text-center'>Update quantity {product.name}</h1>

            <div className='max-w-sm text-center'>
                <img className='rounded-lg border-solid border-2 border-sky-500' src={product.img} alt="" />
                <div className="p-5">
                    <h5 className="mb-2 name text-white text-2xl font-medium tracking-tight dark:text-white">Name : {product.name}</h5>
                    <p className="text-white details text-justify mb-3 font-normal  dark:text-gray-400">Description : {product.description}</p>
                    <div className='item'>
                    <h5 className='text-xl   text-white'>Seller : {product.seller}</h5>
                    <h3 className='text-xl   text-white'>Quantity : {product.quantity}</h3>
                    <h2 className='text-xl   text-white'>Price : ${product.price}</h2>
                    </div>
                    <button onClick={()=>delevary(product._id)} className='text-white'>Delevary</button>
                    <form onSubmit={handleAdd}>
                        <input type="text"placeholder=''name ='quantity' />
                        <input className='text-white' type="submit" value="update" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateQuantity;