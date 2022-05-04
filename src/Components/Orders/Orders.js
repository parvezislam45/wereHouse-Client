import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebas.init';

const Orders = () => {
    const[user] = useAuthState(auth)
    const [orders,setOrders] =useState([])
    useEffect(()=>{
        const email = user.email;
        const url =`http://localhost:7000/order?email=${email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[user])
    return (
        <div>
            <h1 className='text-white'>Orders {orders.length}</h1>
        </div>
    );
};

export default Orders;