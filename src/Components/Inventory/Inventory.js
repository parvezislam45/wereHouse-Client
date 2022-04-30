import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
        <div>
            <h1>This Is Inventory {orderId}</h1>
            {/* {
                inventory.map((item) => (
                    <h1>{item._id}</h1>

                ))
            } */}
        </div>
    );
};

export default Inventory;