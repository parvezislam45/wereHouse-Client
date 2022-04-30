import React from 'react';
import { useNavigate } from 'react-router-dom';

const BikeDetails = ({product}) => {
    const {_id} = product;
    const navigate = useNavigate()
    const goToInventory = id=>{
        	navigate(`/inventory/${id}`)
    }
    return (
        <div>
           <h1>Bike all</h1> 
           <button onClick={()=>goToInventory(_id)}>Go to Inventory</button>
        </div>
    );
};

export default BikeDetails;