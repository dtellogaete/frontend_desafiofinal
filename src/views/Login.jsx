import React, { useState, useContext, useEffect } from 'react';


import { Container, Row, Col, Form, Button, Card} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';




import  Context  from "../context";


const Login = () => {

  const navigate = useNavigate();

  //Variables globales de usuario
  const { user, setUser } = useContext(Context); 

  useEffect(() => {
    if(user.length > 0){
      navigate('/admin');
    }   
  }, [user]);   

  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;   
    setLoginData({ ...loginData, [name]: value });    
  };  



 

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (    
    <>
    <Navbar user= {user}/>
    <div className="hero-area hero-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="form-title">
              <h2>Login</h2>
              <p>Please enter your credentials to log in.</p>
            </div>
            <div id="form_status" />
            <div className="contact-form">
              <form  id="login-form">
                <p>
                  <input type="email" placeholder="Email" name="email" id="email" required />
                </p>
                <p>
                  <input type="password" placeholder="Password" name="password" id="password" required />
                </p>
                <p>
                  <input type="submit" value="Login" />
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>    
    </>       
  );
}

export default Login;
