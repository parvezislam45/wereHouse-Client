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
import RequireAuth from './RequreAuth/RequreAuth';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import AddProduct from './Components/AddProduct/AddProduct';
import DelateProduct from './Components/DelateProduct/DelateProduct';
import UpdateQuantity from './Components/UpdateQuantity/UpdateQuantity';
import Location from './Components/Location/Location';
import { ToastContainer } from 'react-toastify';
import Orders from './Components/Orders/Orders';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App bg-black">
      <Navbar></Navbar>
      <Routes>
        <Route path ="/" element={<Home></Home>}></Route>
        <Route path ="/home" element={<Home></Home>}></Route>
        <Route path ="/inventory/" element={
        <RequireAuth>
          <AllBikes></AllBikes>
        </RequireAuth>
        }></Route>
        <Route path ="/blog" element={<Blog></Blog>}></Route>
        {/* <Route path ="/inventory/:orderId" element={
        <RequireAuth>
          <AllBikes></AllBikes>
        </RequireAuth>
        }></Route> */}
        <Route path = "/update/:id" element = {
        <RequireAuth>
          <UpdateQuantity></UpdateQuantity>
        </RequireAuth>
        }></Route>
        {/* <Route path ="/inventory/" element={<Inventory></Inventory>}></Route> */}
        <Route path ="/signup" element={<SignUp></SignUp>}></Route>
        <Route path ="/login" element={<Login></Login>}></Route>
        <Route path = "/manageinventory/:orderId"element ={
         <RequireAuth>
           <ManageInventory></ManageInventory>
         </RequireAuth>
        }></Route>
        <Route path = "/addproduct"element ={
         <RequireAuth>
           <AddProduct></AddProduct>
         </RequireAuth>
        }></Route>
        <Route path = "/delate"element ={
         <RequireAuth>
           <DelateProduct></DelateProduct>
         </RequireAuth>
        }></Route>
        <Route path = "/orders"element ={
         <RequireAuth>
           <Orders></Orders>
         </RequireAuth>
        }></Route>
        <Route path = "*" element = {<NotFound></NotFound>}></Route>
      </Routes>
     
      <footer className='bg-black mt-3'>
        <Footer></Footer>
      </footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
