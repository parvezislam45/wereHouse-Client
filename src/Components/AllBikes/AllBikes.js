import React, { useEffect, useState } from 'react';
import useProduct from '../../Hook/Hook';
import BikeDetails from '../BikeDetails/BikeDetails';

const AllBikes = () => {
    // const [products, setProducts] = useProduct()
    const [pageCount, setPageCount] = useState(0)
    const [page,setPage] = useState(0)
    const [size,setSize] = useState(6)
    const [products,setProducts] =useState([])
    useEffect(()=>{
        fetch(`http://localhost:7000/product?page=${page}&size=${size}`)
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[page,size])
    useEffect(() => {
        fetch('http://localhost:7000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count/6)
                setPageCount(pages)
            })
    }, [])
    return (
        <div className=' container mx-auto grid grid-cols-3 gap-5 mt-14 gap-y-10'>
            {
                products.map(product => <BikeDetails
                    key={product._id}
                    product={product}
                ></BikeDetails>)
            }
            <div className='pagination'>
                {
                    [...Array(pageCount).keys()]
                        .map(number =><button 
                            onClick={()=>setPage(number)} type="button" className=" text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 justify-center text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">{number +1}</button>)
                }

            </div>
        </div>
    );
};

export default AllBikes;