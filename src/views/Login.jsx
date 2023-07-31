import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/* Componentes  */
import Navbar from '../components/Nav';
import Footer from '../components/Footer';

/* Context */
import ContextUser from "../context";

const Login = () => {
    const navigate = useNavigate();
    const { setUsuario } = useContext(ContextUser);
    const {setToken} = useContext(ContextUser);

    const [usuario, setUsuarioLocal] = useState({});
    const [alerta, setAlerta] = useState(false);
    const [alertaDos, setAlertaDos] = useState(false)

    const handleSetUsuario = ({ target: { value, name } }) => {
        const field = {};
        field[name] = value;
        setUsuarioLocal({ ...usuario, ...field });
      };

    const iniciarSesion = async () => {
      const urlServer = "http://localhost:3002";
      const endpoint = "/login";
      const { email, password } = usuario;
      try {
        if (!email || !password) return setAlerta(true);
        console.log(usuario)
        const { data: token } = await axios.post(urlServer + endpoint, usuario);   
        console.log(token)     
        localStorage.setItem("token", token.token);
        setToken(token);    
        setUsuario()
        alert("Usuario logueado con éxito");
        navigate("/perfil");
      } catch ({ response: { data: message } }){
        setAlertaDos(true);
      }
    }; 



  return (
    <>
        <Navbar></Navbar>
          <div className="col-10 col-sm-6 col-md-3 m-auto" id="login">
            <h1>Iniciar Sesión</h1>
            {alerta ? <div className={"alert alert-danger"}> Email y contraseña obligatorios!</div> : null}
            {alertaDos ? <div className={"alert alert-danger"}> Email y/o contraseña incorrectos!</div> : null}
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

