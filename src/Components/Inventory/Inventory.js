import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProduct from "../../Hook/Hook";
import { addToDb, getStoredInventory } from "../../utilities/fakedb";

const Inventory = () => {
    const {orderId} = useParams()
    // const [products, setProduct] = useProduct()
    // const [inventory, setInventory] = useState([])
    // useEffect(() => {
    //     const storedInventory = getStoredInventory()
    //     const savedInventory = []
    //     for (const _id in savedInventory) {
    //         const addedProduct = products.find(product => product._id === _id);
    //         if (addedProduct) {
    //             const quantity = storedInventory[_id]
    //             addedProduct.quantity = quantity;
    //             savedInventory.push(addedProduct);
    //         }
    //     }
    //     setInventory(savedInventory)
    // }, [products])
    // const remove = () => {
    //     setInventory([])
    // }
    return (
        <div className="inventory">
            <h1>This Is Inventory {orderId}</h1>
            <div className="text-center">
            <Link to ='/manageinventory'>
            <Button type='submit' variant='contained' color='primary'>Manage Inventory</Button>
            </Link>
            </div>
            {/* {
                inventory.map((item) => (
                    <h1>{item._id}</h1>

                ))
            } */}
        </div>
    );
};

export default Inventory;