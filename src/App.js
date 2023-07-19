import React from 'react';

import './App.css';

import {  BrowserRouter,  Route, Routes } from 'react-router-dom';

/* Views */
import Home from './views/Home';
import Login from './views/Login';

const App = () => {
  return ( 
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />  
          <Route path="/login" element={<Login/>} />       
               
        </Routes>      
      </BrowserRouter>    
    </div>       
  );
};

export default App;
