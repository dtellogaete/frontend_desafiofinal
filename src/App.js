import React, {useEffect, useState} from 'react';

import './App.css';

import {  BrowserRouter,  Route, Routes } from 'react-router-dom';

/* Views */
import Home from './views/Home';
import Login from './views/Login';
import Registro from './views/Registro';
import Marketplace from './views/Marketplace';
import NotFound from './views/NotFound';
import ProductSingle from './views/ProductSingle';
import Cart from './views/Cart';
import Contact from './views/Contact';
import Profile from './views/Profile';
import RegistroProductos from './views/RegistroProductos';

/*Context*/
import Context  from './contextproduct';

const App = () => {

  const storedCart = localStorage.getItem('cart');
  const [cart, setCart] = useState(storedCart ? JSON.parse(storedCart) : []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return ( 
    <div>
      <BrowserRouter>
      <Context.Provider value={{ cart, setCart }}>
        <Routes>
          <Route path="/" element={<Home/>} />  
          <Route path="/login" element={<Login/>} />      
          <Route path="/registro" element={<Registro/>} />
          <Route path="/market" element={<Marketplace/>} /> 
          <Route path="*" element={<NotFound/>} />
          <Route path="/product/:id" element={<ProductSingle/>} />     
          <Route path="/cart" element={<Cart/>} />  
          <Route path="/contact" element={<Contact/>} /> 
          <Route path="/perfil" element={<Profile/>} /> 
          <Route path="/registrar-producto" element={<RegistroProductos/>} />    
        </Routes>
      </Context.Provider>      
      </BrowserRouter>    
    </div>       
  );
};

export default App;
