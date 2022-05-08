import { Button } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import useProduct from '../../Hook/Hook';
import BikeDetails from '../BikeDetails/BikeDetails';

const AllBikes = () => {
    const [products, setProducts] = useProduct()
    const { orderId} = useParams()
    const handleDelate = id =>{
        const proceed = window.confirm('Are You Sure Delate This ???')
        if(proceed){
            const url = `http://localhost:7000/product/${id}`
            fetch(url, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
    
            })
        }
    }
    return (
        <>
        <div className="text-center mt-5">
                    <Link to={`/manageinventory/${orderId}`}>
                        <Button type='submit' variant='contained' color='primary'>Added-Item</Button>
                    </Link>
                </div>
        <div className=' container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 gap-y-10'>
            
            {
                products.map(product => <BikeDetails
                    key={product._id}
                    product={product}
                    handleDelate={handleDelate}
                ></BikeDetails>)
            }
            

        </div>
        </>
    );
};

export default AllBikes;