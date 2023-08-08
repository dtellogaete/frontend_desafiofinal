import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContextUser from "../context";
import { useContext } from 'react';

/* axios */
import axios from "axios";

/* Componentes  */
import Navbar from '../components/Nav';
import Footer from '../components/Footer';

const EditarPerfil = () => {

    
    const navigate = useNavigate();

    const {usuario, setUsuario} = useContext(ContextUser);

    const [registroTienda, setRegistroTienda] = useState(false);
    const [registroUsuario, setRegistroUsuario] = useState(false);

    const handleSetUsuario = ({ target: {value,  name} }) => {
        const field = {};
        field[name] = value;
        setUsuario({ ...usuario, ...field })
        if (name === "role" && value === "Tienda") { 
        setRegistroTienda(true);
        setRegistroUsuario(false);
    }
        else if (name === "role" && value === "Persona") {
        setRegistroTienda(false);
        setRegistroUsuario(true);
    }
        else if (name === "role"){
        setRegistroUsuario(false);
        setRegistroTienda(false);
        
    }
        
    };

    console.log(usuario)

    const editarUsuario = async () => {
        const urlServer = "https://backend-4vyy.onrender.com";
        const endpoint = "/users";
        try {
          await axios.put(urlServer + endpoint, usuario);
          alert("Usuario editado con éxito");
          navigate("/perfil");
        } catch (error) {
          console.log(error);
        }
    };

    const habilitado = () => {
        if (usuario.role != "Persona" && usuario.role != "Tienda" ) return true
        else if ((usuario.role === "Persona") &&
        (usuario.email === "" || 
        usuario.password === "" || 
        usuario.telephone === "" ||  
        usuario.name === "" ||
        usuario.lastname ==="" ||
        usuario.rut === "" ||
        usuario.region === "" ||
        usuario.comuna === "" || 
        usuario.address === "")
        ) return true
        else if ((usuario.role === "Tienda") &&
        (usuario.email === "" || 
        usuario.password === "" || 
        usuario.telephone === "" || 
        usuario.store_name === "" ||
        usuario.store_razon === "" ||
        usuario.store_rut === "" ||
        usuario.store_region === "" ||
        usuario.store_comuna === "" ||
        usuario.store_address === "")  
        ) return true
        else return false
    }


    
    return (
        <>
        <Navbar/>
        <div className="col-10 col-sm-6 col-md-3 m-auto" id="registro">
        <h1>Editar Perfil</h1>
        <div className="form-group mt-1 ">
            <label>Ingrese su Email</label>
            <input
              value={usuario.email}
              onChange={handleSetUsuario}
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
          
          <div className="form-group mt-1 ">
            <label>Ingrese su contraseña</label>
            <input
              value={usuario.password}
              onChange={handleSetUsuario}
              type="password"
              name="password"
              className="form-control"
              placeholder="contraseña"
            />
          </div>          
          <div className="form-group mt-1 ">
            <label>Ingrese su Nro de Teléfono</label>
            <input
              value={usuario.telephone}
              onChange={handleSetUsuario}
              type="tel"
              name="telephone"
              className="form-control"
              placeholder="Teléfono"
            />
          </div>
        <div className="form-group mt-1 ">
               
          <h1>Datos Personales</h1>
          <div className="form-group mt-1 ">
            <label>Ingrese su Nombre</label>
            <input
              value={usuario.name}
              onChange={handleSetUsuario}
              type="text"
              name="name"
              className="form-control"
              placeholder="Nombre"
            />
          </div>
          <div className="form-group mt-1 ">
            <label>Ingrese su Apellido</label>
            <input
              value={usuario.lastname}
              onChange={handleSetUsuario}
              type="text"
              name="lastname"
              className="form-control"
              placeholder="Apellido"
            />
          </div>
          <div className="form-group mt-1 ">
            <label>Ingrese su RUT</label>
            <input
              value={usuario.rut}
              onChange={handleSetUsuario}
              type="text"
              name="rut"
              className="form-control"
              placeholder="RUT"
            />
          </div>
          
          <h3>Ingrese su Dirección</h3>
          <div className="form-group mt-1 ">
        <label>Region</label>
        <select
          value={usuario.region}
          onChange={handleSetUsuario}
          name="region"
          className="form-select"
        >
          <option>
            Seleccione su region:
          </option>
          <option value="Arica y Parinacota">Arica y Parinacota</option>
          <option value="Tarapacá">Tarapacá</option>
          <option value="Antofagasta">Antofagasta</option>
          <option value="Atacama">Atacama</option>
          <option value="Coquimbo">Coquimbo</option>
          <option value="Valparaíso">Valparaíso</option>
          <option value="Metropolitana de Santiago">Metropolitana de Santiago</option>
          <option value="Libertador General Bernardo O\'Higgins">Libertador General Bernardo O\'Higgins</option>
          <option value="Maule">Maule</option>
          <option value="Ñuble">Ñuble</option>
          <option value="Biobío">Biobío</option>
          <option value="Araucanía">Araucanía</option>
          <option value="Los Ríos">Los Ríos</option>
          <option value="Los Lagos">Los Lagos</option>
          <option value="Aysén del General Carlos Ibáñez del Campo">Aysén del General Carlos Ibáñez del Campo</option>
          <option value="Magallanes y de la Antártica Chilena">Magallanes y de la Antártica Chilena</option>
        </select>
      </div>
      <div className="form-group mt-1 ">
            <label>Comuna</label>
            <input
              value={usuario.comuna}
              onChange={handleSetUsuario}
              type="text"
              name="comuna"
              className="form-control"
              placeholder="Comuna"
            />
          </div>
          <div className="form-group mt-1 ">
            <label>Calle / Nro / Dep</label>
            <input
              value={usuario.address}
              onChange={handleSetUsuario}
              type="text"
              name="address"
              className="form-control"
              placeholder="Calle / Nro"
            />
          </div>
          {/* Rol */}
          <label>Rol</label> 
          <select
            value={usuario.role}
            onChange={handleSetUsuario}
            name="role"
            className="form-select"
          >
            <option>
              Seleccione un rol:
            </option>
            <option value="Persona">Persona</option>
            <option value="Tienda">Tienda</option>
          </select>
          
          

          
         {registroTienda ? <>
         <h1 id="tienda">Datos de la Tienda</h1>
         <div className="form-group mt-1 ">
           <label>Ingrese Nombre de la tienda</label>
           <input
             value={usuario.store_name}
             onChange={handleSetUsuario}
             type="text"
             name="store_name"
             className="form-control"
             placeholder="Nombre de la tienda"
           />
         </div>
         <div className="form-group mt-1 ">
           <label>Ingrese Razon social de la tienda</label>
           <input
             value={usuario.store_razon}
             onChange={handleSetUsuario}
             type="text"
             name="store_razon"
             className="form-control"
             placeholder="Razon social de la tienda"
           />
         </div>
         <div className="form-group mt-1 ">
           <label>Ingrese RUT de la tienda</label>
           <input
             value={usuario.store_rut}
             onChange={handleSetUsuario}
             type="text"
             name="store_rut"
             className="form-control"
             placeholder="RUT de la tienda"
           />
         </div>
         <h3>Ingrese Dirección de la tienda</h3>
          <div className="form-group mt-1 ">
        <label>Region</label>
        <select
          value={usuario.store_region}
          onChange={handleSetUsuario}
          name="store_region"
          className="form-select"
        >
          <option>
            Seleccione su region:
          </option>
          <option value="Arica y Parinacota">Arica y Parinacota</option>
          <option value="Tarapacá">Tarapacá</option>
          <option value="Antofagasta">Antofagasta</option>
          <option value="Atacama">Atacama</option>
          <option value="Coquimbo">Coquimbo</option>
          <option value="Valparaíso">Valparaíso</option>
          <option value="Metropolitana de Santiago">Metropolitana de Santiago</option>
          <option value="Libertador General Bernardo O\'Higgins">Libertador General Bernardo O\'Higgins</option>
          <option value="Maule">Maule</option>
          <option value="Ñuble">Ñuble</option>
          <option value="Biobío">Biobío</option>
          <option value="Araucanía">Araucanía</option>
          <option value="Los Ríos">Los Ríos</option>
          <option value="Los Lagos">Los Lagos</option>
          <option value="Aysén del General Carlos Ibáñez del Campo">Aysén del General Carlos Ibáñez del Campo</option>
          <option value="Magallanes y de la Antártica Chilena">Magallanes y de la Antártica Chilena</option>
        </select>
      </div>
      <div className="form-group mt-1 ">
            <label>Comuna</label>
            <input
              value={usuario.store_comuna}
              onChange={handleSetUsuario}
              type="text"
              name="store_comuna"
              className="form-control"
              placeholder="Comuna"
            />
          </div>
          <div className="form-group mt-1 ">
            <label>Calle / Número / oficina</label>
            <input
              value={usuario.store_address}
              onChange={handleSetUsuario}
              type="text"
              name="store_address"
              className="form-control"
              placeholder="Calle / Número / Oficina"
            />
          </div>

         </>
         : null}   
      </div>
            <button onClick={editarUsuario} className="btn btn-light mt-3" id="boton_registrarse" disabled={habilitado()}>
            Guardar cambios
          </button>
        </div>
        <Footer/>
        </>
    );
}

export default EditarPerfil;