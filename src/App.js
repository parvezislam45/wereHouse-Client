import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Carosel from './Components/Carosel/Carosel';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AllBikes from './Components/AllBikes/AllBikes';
import Blog from './Components/Blog/Blog';
import Inventory from './Components/Inventory/Inventory';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Carosel></Carosel>
      <Routes>
        <Route path ="/" element={<Home></Home>}></Route>
        <Route path ="/home" element={<Home></Home>}></Route>
        <Route path ="/allbike" element={<AllBikes></AllBikes>}></Route>
        <Route path ="/blog" element={<Blog></Blog>}></Route>
        <Route path ="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path ="/signup" element={<SignUp></SignUp>}></Route>
        <Route path ="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
