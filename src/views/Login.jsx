

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



/* Componentes  */
import Navbar from '../components/Nav';
import Footer from '../components/Footer';


const Login = () => {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({});
    const [alerta, setAlerta] = useState(false)

    const handleSetUsuario = ({ target: { value, name } }) => {
        const field = {};
        field[name] = value;
        setUsuario({ ...usuario, ...field });
      };

    const iniciarSesion = async () => {
      const { email, password } = usuario;
      try {
        if (!email || !password) return setAlerta(true);
      } catch ({ response: { data: message } }){}
    };

 

return (
    <>
        <Navbar></Navbar>
    <div className="col-10 col-sm-6 col-md-3 m-auto" id="login">
      <h1>Iniciar Sesión</h1>
      {alerta ? <div className={"alert alert-danger"}> Email y contraseña obligatorios!</div> : null}
      <div className="form-group mt-1 ">
        <label>Email address</label>
        <input
          value={usuario.email}
          onChange={handleSetUsuario}
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group mt-1 ">
        <label>Password</label>
        <input
          value={usuario.password}
          onChange={handleSetUsuario}
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
        />
      </div>

      <button onClick={iniciarSesion} className="btn mt-3" id="boton_iniciar_sesion">
        Iniciar Sesión
      </button>
    </div>
    <Footer></Footer>  
    </>
    );

};

export default Login;