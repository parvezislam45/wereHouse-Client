import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetails from "../../Hook/useProductDetails";

const Inventory = () => {
    const {orderId} = useParams()
    const [product] = useServiceDetails(orderId)
    return (
        <div className="inventory">
            <h1 className="text-white text-center">Id : {orderId}</h1>
            <h1 className="text-white text-center">Name : {product.name}</h1>
            <div className="text-center">
            <Link to ={`/manageinventory/${orderId}`}>
            <Button type='submit' variant='contained' color='primary'>Manage Inventory</Button>
            </Link>
            </div>
        </div>
    );
};

export default Inventory;