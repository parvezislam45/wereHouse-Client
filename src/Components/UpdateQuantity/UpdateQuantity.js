import { Button, Grid, Input, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateQuantity = () => {
    const {id} =useParams();
    const { register, handleSubmit } = useForm();
    const [items,setItems] = useState({})
    const handleAdd = data => {
        const quantity = parseInt(data)
        const newQuantity = parseInt(quantity)+parseInt(items?.quantity)
        console.log(newQuantity)
        const updateItem = {newQuantity}
        const url = `http://localhost:7000/product/${id}`;
        fetch(url,{
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then (result =>{
            setItems(result);
        })
    };
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    return (
        <div>
            <h1 className='text-white text-center'>Update quantity {items.quantity}</h1>
            <Grid>
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
            </Grid>
        </div>
    );
};

export default UpdateQuantity;