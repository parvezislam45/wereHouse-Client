import { useEffect, useState } from "react"

const useServiceDetails =orderId =>{
    const [product,setProduct] = useState({})
    useEffect(()=>{
        const url = `http://localhost:7000/product/${orderId}`
        fetch(url)
        .then(res=> res.json())
        .then (data =>setProduct(data))
    },[orderId])
    return [product]
}
export default useServiceDetails