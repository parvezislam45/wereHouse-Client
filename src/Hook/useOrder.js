import { useEffect, useState } from "react"

const useOrder = email =>{
    const [orders,setOrders] =useState({})
    useEffect(()=>{
        const url =`http://localhost:7000/order`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return [orders,setOrders]
}
export default useOrder