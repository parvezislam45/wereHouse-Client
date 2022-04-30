import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AllBikes from './Components/AllBikes/AllBikes';
import Blog from './Components/Blog/Blog';
import Inventory from './Components/Inventory/Inventory';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import Checkout from './Components/Checkout/Checkout';
import RequireAuth from './RequreAuth/RequreAuth';

function App() {
  return (
    <div className="App">
      <div className="sticky">
      <Navbar></Navbar>
      </div>
      <Routes>
        <Route path ="/" element={<Home></Home>}></Route>
        <Route path ="/home" element={<Home></Home>}></Route>
        <Route path ="/allbike" element={<AllBikes></AllBikes>}></Route>
        <Route path ="/blog" element={<Blog></Blog>}></Route>
        <Route path ="/inventory/:orderId" element={<Inventory></Inventory>}></Route>
        <Route path ="/inventory/" element={<Inventory></Inventory>}></Route>
        <Route path ="/signup" element={<SignUp></SignUp>}></Route>
        <Route path ="/login" element={<Login></Login>}></Route>
        <Route path = "/checkout"element ={
         <RequireAuth>
           <Checkout></Checkout>
         </RequireAuth>
        }></Route>
        <Route path = "*" element = {<NotFound></NotFound>}></Route>
      </Routes>
      <footer className='bg-black'>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
