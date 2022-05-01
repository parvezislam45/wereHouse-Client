import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProduct from "../../Hook/Hook";
import { addToDb, getStoredInventory } from "../../utilities/fakedb";

const Inventory = () => {
    const {orderId} = useParams()
    const [product,setProduct] = useState({})
    useEffect(()=>{
        const url = `http://localhost:7000/product/${orderId}`
        fetch(url)
        .then(res=> res.json())
        .then (data =>setProduct(data))
    },[])
    return (
        <div className="inventory">
            <h1 className="text-white text-center">Id : {orderId}</h1>
            <h1 className="text-white text-center">Name : {product.name}</h1>
            <div className="text-center">
            <Link to ='/manageinventory'>
            <Button type='submit' variant='contained' color='primary'>Manage Inventory</Button>
            </Link>
            </div>
        </div>
    );
};

export default Inventory;