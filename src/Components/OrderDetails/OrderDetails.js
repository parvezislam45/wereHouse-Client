import React from 'react';

const OrderDetails = ({order}) => {
    const {products} = order
    return (
        <div>
            <h1 className='text-white'>Name : {products}</h1>
        </div>
    );
};

export default OrderDetails;