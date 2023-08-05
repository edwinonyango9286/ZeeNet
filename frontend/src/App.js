import React  from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Store from './Pages/Store';
import Blogs from "./Pages/Blogs"
import CompareProducts from './Pages/CompareProducts';
import Wishlist from './Pages/Wishlist';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import Signup from './Pages/Signup';
import ResetPassword from './Pages/ResetPassword';
import SingleBlog from './Pages/SingleBlog';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>} />
      <Route path='store' element={<Store/>}/>
      <Route path='blogs' element={<Blogs/>}/>
      <Route path='blogs/singleblog/:id' element={ <SingleBlog/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='compare-products' element={<CompareProducts/>}/>
      <Route path='wishlist' element={<Wishlist/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='forgot-password' element={<ForgotPassword/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='reset-password' element={<ResetPassword/>}/>
     </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
