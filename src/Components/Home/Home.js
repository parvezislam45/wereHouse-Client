import React from 'react';
import { Link } from 'react-router-dom';
import useProduct from '../../Hook/Hook';
import Background from '../Background/Background';
import Carosel from '../Carosel/Carosel';
import HomeDetails from '../HomeDetails/HomeDetails';
import Location from '../Location/Location'
import card1 from '../../Image/1.gif'
import card2 from '../../Image/2.gif'
import card3 from '../../Image/3.gif'
import card4 from '../../Image/4.gif'
import card5 from '../../Image/5.gif'
import card6 from '../../Image/6.gif'

const Home = () => {
    const [products] = useProduct()
    return (
        <div>
            <div className="mt-3">
            <Background className='mx-8 bg-white'></Background>
            </div>
            <div className="mt-2">
            <hr />
            </div>
            <div className="mt-5">
            <Carosel></Carosel>
            </div>     
            <h1 className='text-white text-3xl text-center mt-2 title2'>Our Product</h1>
            <div className=' mx-auto grid col-1 md:grid-cols-3 gap-5 mt-14 gap-y-10 bg-black'>
                {
                    products.slice(0, 6).map(product => <HomeDetails
                        key={product._id}
                        product={product}
                    ></HomeDetails>)
                }
            </div>
            <div className='text-center'>
                <Link className='justify-center' to="/inventory"> <button type="button" className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-16 py-2 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Go Inventory</button></Link>
            </div>
            <hr />
            <div className="mt-5">
                <h1 className='text-white text-3xl text-center mt-5 title2'>New Arrivel</h1> 
                </div>
            <div className=' mx-auto grid col-1 md:grid-cols-3  gap-5 gap-y-10 mt-3 mx-auto'>
                <div class=" bg-white rounded-lg border border-gray-200 h-96 w-96 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
                        <img class="rounded-t-lg h-96 w-96" src= {card1} alt="" />
                </div>
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-96 w-96">
                        <img class="rounded-t-lg h-96 w-96 " src={card2} alt="" />
                </div>
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-96 w-96">
                        <img class="rounded-t-lg h-96 w-96 " src={card3} alt="" />
                </div>
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-96 w-96">
                        <img class="rounded-t-lg h-96 w-96" src={card4} alt="" />
                </div>
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-96 w-96">
                        <img class="rounded-t-lg h-96 w-96 " src={card5} alt="" />
                </div>
                <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 h-96 w-96">
                        <img class="rounded-t-lg h-96 w-96 " src={card6} alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-white text-3xl text-center mt-5 title2'>Our Location</h1>
                <div className="mt-5 drop-shadow-2xl rounded-lg border-solid border-2 border-sky-500">
                    
                </div>

            </div>
            <Location></Location>
        </div>
    );
};

export default Home;