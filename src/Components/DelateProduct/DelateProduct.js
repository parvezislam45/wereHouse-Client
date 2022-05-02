import { Button } from '@material-ui/core';
import React from 'react';
import useProduct from '../../Hook/Hook';

const DelateProduct = () => {
    const [products,setProducts] = useProduct();
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
        <div>
            <h1 className='text-white text-center'>Delate</h1>
            {
                products.map(product => <div
                key = {product._id}
                ><h1 className='text-white text-center'>{product.name}<Button onClick={()=> handleDelate(product._id)}><span className='text-white'>X</span></Button></h1>


                </div>)
            }
        </div>
    );
};

export default DelateProduct;