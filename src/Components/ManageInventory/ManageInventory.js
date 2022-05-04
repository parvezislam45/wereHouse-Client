import { Button, Grid, Paper, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebas.init';
import useServiceDetails from '../../Hook/uaeProductDetails';

const ManageInventory = () => {
    const { orderId } = useParams()
    const [products] = useServiceDetails(orderId)
    const [user] = useAuthState(auth);
    const [users,setUser]=useState({})
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }

    const handlePlaceOrder = e =>{
        e.preventDefault()
        const order ={
            email: user.email,
            products: products.name,
            productsId: orderId,
            address: e.target.address.value,
            phone: e.target.phone.value
        }
        axios.post('http://localhost:7000/order',order).then(response =>{
            const {data} =response;
            if(data.insertedId){
                console.log(data.insertedId)
                toast('your order is booked')
            }
        })
    }

    return (
        <div className=' container mx-auto grid grid-cols-3 gap-5 mt-14 gap-y-10'>
            <h1 className='text-white'>Name : {products.name}</h1>
            <Grid>
                <Paper elevation={20} style={paperStyle}>

                    <form onSubmit={handlePlaceOrder} >
                        <TextField fullWidth label='Name' type='Name' name='name'value={user.displayName} placeholder="Enter your Name" />
                        <TextField fullWidth label='Email' type='email' value={user.email} name='email' placeholder=" email" required disabled />
                        <TextField fullWidth label='' type='Name' value={products.name} name='' placeholder="" />
                        <TextField fullWidth label='Name' type='address' name='address' placeholder=" address" autoComplete='off' required />
                        <TextField fullWidth label='Name' type='phone' name='phone' placeholder=" phone" autoComplete='off' />
                        
                        <div className='mt-5'>
                            <Button type='submit' variant='contained' color='primary'>Place Order</Button>
                        </div>

                        <div className="mt-2">

                        </div>
                    </form>
                </Paper>
            </Grid>

        </div>
    );
};

export default ManageInventory;