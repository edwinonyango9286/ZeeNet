import React  from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Store from './Pages/Store';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Layout/>}>
      <Route index element={<Home></Home>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/store' element={<Store/>}/>

     </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
