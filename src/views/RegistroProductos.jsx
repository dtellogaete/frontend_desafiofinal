import React, { useState, useContext, useEffect} from 'react';

import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import { Button } from 'react-bootstrap';

/* Navigate */
import { useNavigate } from "react-router-dom";

/* Firestore */
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

/* axios */
import axios from 'axios';

/* ContextUSer */
import ContextUser from "../context";

const RegistroProductos = () => {

  /* Navigate */
  const navigate = useNavigate();

  /* Usuario Validacion*/
  const { setUsuario: setUsuarioGlobal } = useContext(ContextUser); 
  const [usuario, setUsuarioLocal] = useState({});  
  const { token } = useContext(ContextUser);

  const getUsuarioData = async () => {
    const urlServer = "https://backend-4vyy.onrender.com";
    const endpoint = "/users";
     try {
      const { data } = await axios.get(urlServer + endpoint, {
        headers: { Authorization: "Bearer " + token.token },
      });
      setUsuarioGlobal(data);
      setUsuarioLocal(data);
    } catch(error) {      
      console.log(error + " 🙁");
    //catch ({ response: { data: message } }) {
      //alert(message + " 🙁");
      //console.log(message);
    }
  };

  useEffect(() => {
    getUsuarioData();
  }, []);

  const [producto, setProducto] = useState({
    id_users: usuario.id_users,
    name: "",
    brand: "",
    description: "",
    variant: "",
    price: 0,
    iva: 0.19,
    codebar: "",
    sku: "",
    photo: "",
    stock: 0,
  });

  const handleSetProducto = ({ target: { value, name } }) => {
    //Agrega id_users al producto
    setProducto((prevProducto) => {
      const field = {};
      field[name] = value;
      const id_users = usuario.id_users;
      
  
      return {
        ...prevProducto,
        ...field,
        id_users: id_users,
      
      };
    });
  };
  

  console.log("prodcuto", producto)

  const registrarProducto = async () => {
    try {
      const urlServer = "https://backend-4vyy.onrender.com";
      const endpoint = '/products';
      const response = await axios.post(urlServer + endpoint, producto); // Hacer la solicitud POST a la ruta '/products'
      console.log('Respuesta del servidor:', response.data);
      alert('Producto registrado con éxito');
      navigate('/perfil');
      // Realiza las acciones necesarias después de registrar el producto
    } catch (error) {
      console.log('Error al registrar el producto:', error);
    }
  };

  const habilitado = () => {
    if (
      producto.name === "" ||
      producto.variant === "" ||
      producto.price === 0 ||
      producto.stock === 0
    ) {
      return true;
    }
    return false;
  };



   /* Cargar imagenes */
   /* FileUpload 
   const storage = getStorage();

   const [formData, setFormData] = useState({});

   const handleFileUpload = async (event, fieldName) => {
       const file = event.target.files[0];
       const fileExtension = file.name.split('.').pop().toLowerCase();
       let allowedExtensions;
       
       if (fieldName === 'imgCentro' || fieldName === 'planoTecnico1' || fieldName === 'planoTecnico2') {
           allowedExtensions = ['jpg', 'jpeg', 'png'];
       } else {
           allowedExtensions = ['jpg', 'jpeg', 'png', 'pdf'];
       }
       
       if (allowedExtensions.includes(fileExtension)) {
         // Continuar con la carga del archivo       
           setFormData((prevState) => ({
               ...prevState,
               [fieldName]: {
               file: file,
               fileExtension: fileExtension,
               }
           }));
       } else {
           alert('Solo se permiten imágenes JPG, PNG o JPEG para "Imagen Centro", "Plano Técnico 1" y "Plano Técnico 2". Para los demás campos se permiten imágenes JPG, PNG, JPEG y archivos PDF.');
           // Resetear el input de archivo
           event.target.value = null;
       }
   };
   */

  return (
    <div>
      <Navbar />
      <div className="col-10 col-sm-6 col-md-3 m-auto" id="registro">
      <h1>Registro de Productos</h1>
      <div className="form-group mt-1">
        <label>Nombre del Producto</label>
        <input
          value={producto.name}
          onChange={handleSetProducto}
          type="text"
          name="name"
          className="form-control"
          placeholder="Nombre del producto"
        />
      </div>
      <div className="form-group mt-1">
        <label>Variante</label>
        <input
          value={producto.variant}
          onChange={handleSetProducto}
          type="text"
          name="variant"
          className="form-control"
          placeholder="Variante"
        />
      </div>
      <div className="form-group mt-1">
        <label>Marca</label>
        <input
          value={producto.brand}
          onChange={handleSetProducto}
          type="text"
          name="brand"
          className="form-control"
          placeholder="Marca"
        />
      </div>
      <div className="form-group mt-1">
        <label>Descripción</label>
        <input
          value={producto.description}
          onChange={handleSetProducto}
          type="text"
          name="description"
          className="form-control"
          placeholder="Descripción"
        />
      </div>
      <div className="form-group mt-1">
        <label>Codigo de Barra</label>
        <input
          value={producto.codebar}
          onChange={handleSetProducto}
          type="text"
          name="codebar"
          className="form-control"
          placeholder="Código de Barra"
        />
      </div>
      <div className="form-group mt-1">
        <label>SKU</label>
        <input
          value={producto.sku}
          onChange={handleSetProducto}
          type="text"
          name="sku"
          className="form-control"
          placeholder="SKU"
        />
      </div>      
      <div className="form-group mt-1">
        <label>Precio</label>
        <input
          value={producto.price}
          onChange={handleSetProducto}
          type="number"
          name="price"
          className="form-control"
          placeholder="Precio"
        />
      </div>
      <div className="form-group mt-1">
        <label>Stock</label>
        <input
          value={producto.stock}
          onChange={handleSetProducto}
          type="number"
          name="stock"
          className="form-control"
          placeholder="Stock"
        />
      </div>
      <Button
        onClick={registrarProducto}
        className="btn-success"
        disabled={habilitado()}
      >
        Registrar
      </Button>
    </div>
    <Footer />
    </div>
  );
};

export default RegistroProductos;
