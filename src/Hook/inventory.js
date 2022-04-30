import { useEffect, useState } from "react"
import {getStoredInventory} from '../utilities/fakedb'

const useInventory = (products)=>{
    const [inventory,setInventory]= useState([])
    useEffect(()=>{
        const storedInventory = getStoredInventory()
        const savedInventory = []
        for (const _id in savedInventory){
            const addedProduct = products.find(product => product._id === _id);
            if(addedProduct){
                const quantity = storedInventory[_id]
                addedProduct.quantity = quantity;
                savedInventory.push(addedProduct);
            }
        }
        setInventory(savedInventory)
    },[products])
    return [inventory,setInventory]
}
export default useInventory