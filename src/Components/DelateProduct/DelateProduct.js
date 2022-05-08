import { Button } from '@material-ui/core';
import React from 'react';
import useProduct from '../../Hook/Hook';

const DelateProduct = () => {
    const [products] = useProduct();
    return (
        <div>
            <h1 className='text-white text-center'>Delate</h1>
            {
                products.map(product => <div
                key = {product._id}
                ><h1 className='text-white text-center'>{product.name}<Button><span className='text-white'>X</span></Button></h1>


                </div>)
            }
        </div>
    );
};

export default DelateProduct;