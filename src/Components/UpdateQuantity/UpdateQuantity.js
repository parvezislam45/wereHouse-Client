import { Button, Grid, Input, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';

const UpdateQuantity = () => {
    const {id} =useParams();
    const { register, handleSubmit } = useForm();
    const [items,setItems] = useState({})
    const [isReload,setIsreload] =useState(false)
    useEffect(()=>{
        const url = `http://localhost:7000/product/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setItems(data))
    },[isReload])
    const handleAdd = e => {
        e.preventDefault()
        const quantity = e.target.quantity.value
        const newQuantity = parseInt(quantity)+parseInt(items?.quantity)
        console.log(newQuantity)
        const updateItem = {newQuantity}
        if(!quantity){
            alert('helo gelo ailo')
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
            console.log(result)
            setIsreload(!isReload)
            e.target.reset()
            // setItems(result);
        })
        }
        
    };

    const delevary = e => {
       
        const quantity = items?.quantity
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
    // const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    // const headerStyle = { margin: 0 }
    return (
        <div>
            <h1 className='text-white text-center'>Update quantity {items.name}</h1>

            <div className='max-w-sm text-center'>
                <img className='rounded-lg border-solid border-2 border-sky-500' src={items.img} alt="" />
                <div className="p-5">
                    <h5 className="mb-2 name text-white text-2xl font-medium tracking-tight dark:text-white">Name : {items.name}</h5>
                    <p className="text-white details text-justify mb-3 font-normal  dark:text-gray-400">Description : {items.description}</p>
                    <div className='item'>
                    <h5 className='text-xl   text-white'>Seller : {items.seller}</h5>
                    <h3 className='text-xl   text-white'>Quantity : {items.quantity}</h3>
                    <h2 className='text-xl   text-white'>Price : ${items.price}</h2>
                    </div>
                    <button onClick={()=>delevary(items._id)} className='text-white'>Delevary</button>
                    <form onSubmit={handleAdd}>
                        <input type="text"placeholder=''name ='quantity' />
                        <input className='text-white' type="submit" value="update" />
                    </form>
                    <div className="mb-3">
                        {/* <button onClick={() => goToInventory(_id)} type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Go Inventory</button> */}
                    </div>
                    {/* <Link to= {`/update/${_id}`}><button type="button" class="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Update Quantity</button></Link> */}
                </div>
            </div>
            {/* <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <h2 style={headerStyle}>Added Item</h2>
                    </Grid>
                    <form onSubmit={handleSubmit(handleAdd)}>

                        <Input {...register("quantity")}label='stock' placeholder="Add quantity" />

                        <div className='mt-5'>
                            <Button type='submit' variant='contained' color='primary'>Add Item</Button>
                        </div>
                    </form>
                </Paper>
            </Grid> */}
        </div>
    );
};

export default UpdateQuantity;