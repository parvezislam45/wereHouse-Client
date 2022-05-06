import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebas.init';
import OrderDetails from '../OrderDetails/OrderDetails';

const Orders = () => {
    const[user] = useAuthState(auth);
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:7000/order")
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    const email = user.email;
    const rest = products.filter(product =>product.email === email)
    return (
        <div>
            <h1 className='text-white'>Orders {rest.length}</h1>
            {
                rest.map(order =><OrderDetails
                key ={order._id}
                order = {order}
                ></OrderDetails>)
            }
            
        </div>
    );
};

export default Orders;