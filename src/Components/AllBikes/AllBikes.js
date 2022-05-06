import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProduct from '../../Hook/Hook';
import useServiceDetails from '../../Hook/useProductDetails';
import BikeDetails from '../BikeDetails/BikeDetails';

const AllBikes = () => {
    const [products, setProducts] = useProduct()
    const handleDelate = id =>{
        const proceed = window.confirm('Are You Sure Delate This ???')
        if(proceed){
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
    }
    return (
        <div className=' container mx-auto grid grid-cols-3 gap-5 mt-14 gap-y-10'>
            {
                products.map(product => <BikeDetails
                    key={product._id}
                    product={product}
                    handleDelate={handleDelate}
                ></BikeDetails>)
            }
        </div>
    );
};

export default AllBikes;