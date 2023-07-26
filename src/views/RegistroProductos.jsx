import React, { useState } from 'react';

import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import { Button } from 'react-bootstrap';

const RegistroProductos = () => {
  const [producto, setProducto] = useState({
    name: "",
    variante: "",
    price: 0,
    stock: 0,
    codebar: "",
  });

  const handleSetProducto = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setProducto({ ...producto, ...field });
  };

  const registrarProducto = async () => {
    // Aquí puedes realizar la lógica para enviar los datos del producto al servidor o base de datos
    try {
      //await axios.post(URL_DEL_ENDPOINT, producto);
      alert("Producto registrado con éxito");
      // Realiza las acciones necesarias después de registrar el producto
    } catch (error) {
      console.log(error);
    }
  };

  const habilitado = () => {
    // Validación para determinar si el botón "Registrar" debe estar habilitado o deshabilitado
    // Puedes agregar aquí la lógica de validación necesaria para los campos del producto
    // Por ejemplo, asegurarse de que todos los campos requeridos estén completos antes de habilitar el botón
    // Ejemplo de validación: si algún campo obligatorio está vacío, devuelve true para deshabilitar el botón
    if (
      producto.name === "" ||
      producto.variante === "" ||
      producto.price === 0 ||
      producto.stock === 0
    ) {
      return true;
    }
    return false;
  };

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
          value={producto.variante}
          onChange={handleSetProducto}
          type="text"
          name="variante"
          className="form-control"
          placeholder="Variante"
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
