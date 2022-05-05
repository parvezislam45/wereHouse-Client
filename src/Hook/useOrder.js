import { useEffect, useState } from "react"

const useOrder = email =>{
    const [order,setOrder] =useState({})
    useEffect(()=>{
        const url =`http://localhost:7000/order/${email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])
    return order
}
export default useOrder