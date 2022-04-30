import React from 'react';

const AddInventory = ({product}) => {
    const {_id} = product
    const delivered = ()=>{

    }
    return (
        <div className=' container mx-auto grid grid-cols-3 gap-5 mt-14 gap-y-10'>
            <h1>Mange Item {product.l}</h1>
            <button onClick={()=>delivered}>Delivered</button>
        </div>
    );
};

export default AddInventory;