import React, {useEffect, useState} from 'react';

import './App.css';

import {  BrowserRouter,  Route, Routes } from 'react-router-dom';

/* Views */
import Home from './views/Home';
import Login from './views/Login';
import Marketplace from './views/Marketplace';
import NotFound from './views/NotFound';
import ProductSingle from './views/ProductSingle';
import Cart from './views/Cart';

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
          <Route path="/market" element={<Marketplace/>} /> 
          <Route path="*" element={<NotFound/>} />
          <Route path="/product/:id" element={<ProductSingle/>} />     
          <Route path="/cart" element={<Cart/>} />          
        </Routes>
      </Context.Provider>      
      </BrowserRouter>    
    </div>       
  );
};

export default App;
