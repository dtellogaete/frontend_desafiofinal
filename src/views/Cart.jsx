import React, { useEffect, useState } from "react";

//Boostrap 
import 'bootstrap/dist/css/bootstrap.min.css';
//Form Bootstrap
import {Form,  Button} from 'react-bootstrap';


/* Context */
import  Context  from "../contextproduct";
import { useContext } from 'react';

/*Data */
import { products_variant } from '../data/Products_variants';

/* Componentes  */
import Navbar from '../components/Nav';
import Footer from '../components/Footer';

/* Navigate */
import { useNavigate } from "react-router-dom";

/* Context */
import ContextUser from "../context";


const Cart =  () => {   
    
  const products = products_variant;

  const { cart, setCart } = useContext(Context);  

  /* Usuario Validacion*/
  const { setUsuario: setUsuarioGlobal } = useContext(ContextUser); 
  const [usuario, setUsuarioLocal] = useState({});  
  const { token } = useContext(ContextUser);

  /*Añade productos al cart*/
  const addToCart = (id) => {    
      const productoExistente = cart.find((p) => p.id === id);
      if (productoExistente) {          
          const nuevosProductos = cart.map((p) =>
          p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
      );
          setCart(nuevosProductos);
      } else {
      // Si el producto no existe en el carrito, agregarlo como un nuevo elemento
          const producto = products.find((p) => p.id_product_variant == id);
          console.log(producto)
      if (producto) {
          setCart([...cart, { id, cantidad: 1 }]);
      }
    }
  };

  // Actualiza la cantidad en el carrito
  const updateCartQuantity = (id, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, cantidad: newQuantity } : item
    );
    setCart(updatedCart);
  };

  // Elimina un producto del carrito
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  //Formulario tickets         
  const [formData, setFormData] = useState({
      
      doc_sii: '',
      date: '',
      subtotal: '',
      total: '',
      contact: '',
      telephone: '',
      rut: '',
      city: '',
      region: '',
      razon_social: '',
      pay_method: '',
      status: '',
      city_ship: '',
      address_ship: '',
      region_ship: '',
      // ...otras variables del formulario...
  });

  //Calculo de variables finales
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [totalConEnvio, setTotalConEnvio] = useState(0);

      
  useEffect(() => {
    // Calcular el subtotal
    const newSubtotal = cart.reduce((subtotal, item) => {
      const product = products.find((p) => p.id_product_variant == item.id);
      return subtotal + (product.price * item.cantidad);
    }, 0);
    
    setSubtotal(newSubtotal);
  
    // Calcular el total con IVA del 19%
    const iva = 0.19;
    const newTotal = newSubtotal * (1 + iva);
    setTotal(newTotal);
  
    // Calcular el costo de envío
    const newShippingCost = newTotal > 100000 ? 0 : 10000;
    setShippingCost(newShippingCost);
  
    // Calcular el total (subtotal + costo de envío)
    const newTotalConEnvio = newTotal + newShippingCost;
    setTotalConEnvio(newTotalConEnvio);
  }, [cart, products]);


  // HandleChange
  const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData({ ...formData, [id]: value });
  };

  console.log(formData)
        
  // Lista de regiones de Chile
  const regionesChile = [
    'Arica y Parinacota',
    'Tarapacá',
    'Antofagasta',
    'Atacama',
    'Coquimbo',
    'Valparaíso',
    'Metropolitana de Santiago',
    'Libertador General Bernardo O\'Higgins',
    'Maule',
    'Ñuble',
    'Biobío',
    'Araucanía',
    'Los Ríos',
    'Los Lagos',
    'Aysén del General Carlos Ibáñez del Campo',
    'Magallanes y de la Antártica Chilena',
  ];      

 





  return (
    <>
    <Navbar></Navbar>
    {/* breadcrumb-section */}
    <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
        <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
            <div className="breadcrumb-text">
                <p>Herbaland</p>
                <h1>Carrito</h1>
            </div>
            </div>
        </div>
        </div>
    </div>
    {/* end breadcrumb section */}
    {/* cart */}
    <div className="cart-section mt-150 mb-150">
        <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-12">
            <div className="cart-table-wrap">
                <table className="cart-table">
                <thead className="cart-table-head">
                    <tr className="table-head-row">
                    <th className="product-remove" />
                    <th className="product-image">Imagen</th>
                    <th className="product-name">Producto</th>
                    <th className="product-price">Precio</th>
                    <th className="product-quantity">Cantidad</th>
                    <th className="product-total">Total</th>
                    </tr>
                </thead>
                <tbody>
                {cart.map((item) => {
                    const product = products.find((product) => product.id_product_variant === parseInt(item.id));
                    return (
                        <tr className="table-body-row">
                        <td className="product-remove">
                        <a href="#" onClick={() => removeFromCart(item.id)}>
                            <i className="far fa-window-close" />
                        </a>
                        </td>
                        <td className="product-image">
                            <img src="https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__medium/public/media/2019/04/23/menta_p.jpg" alt="" />
                        </td>
                        <td className="product-name">{product.name+" "+product.variante}</td>
                        <td className="product-price">{product.price}</td>
                        <td className="product-quantity">
                        <input
                            type="number"
                            placeholder={item.cantidad}
                            value={item.cantidad}
                            onChange={(e) => updateCartQuantity(item.id, parseInt(e.target.value))}
                        />
                        </td>
                        <td className="product-total">{(product.price)*(item.cantidad)}</td>
                        </tr>
                    );
                })}
                </tbody>
                </table>
            </div>
            </div>
            <div className="col-lg-4">
            <div className="total-section">
                <table className="total-table">
                <thead className="total-table-head">
                    <tr className="table-total-row">
                    <th>Total</th>
                    <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="total-data">
                    <td>
                        <strong>Subtotal: </strong>
                    </td>
                    <td>{`$${Math.round(subtotal/1.19)}`}</td>
                    </tr>
                    <tr className="total-data">
                    <td>
                        <strong>IVA: </strong>
                    </td>
                    <td>{`$${subtotal*0.19}`}</td>
                    </tr>
                    <tr className="total-data">
                    <td>
                        <strong>Costo de Envío </strong>
                    </td>
                    <td>{`$${shippingCost}`}</td>
                    </tr>
                    <tr className="total-data">
                    <td>
                        <strong>Total: </strong>
                    </td>
                    <td>{`$${total/1.19+shippingCost}`}</td>
                    </tr>
                </tbody>
                </table>                
            </div>            
            </div>
        </div>
        </div>
    </div>
    {/* end cart */}
    <>
    {/* check out section */}
    <div className="checkout-section mt-150 mb-150">
    <div className="container">
        <div className="row">        
          <div className="checkout-accordion-wrap">
          <div className="accordion" id="accordionExample">
              <div className="card single-accordion">
              <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                  <button
                      className="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                  >
                      Check Out
                  </button>
                  </h5>
              </div>
              <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
              >
                  <div className="card-body">
                  <div className="billing-address-form">
                  <Form style={{textAlign: 'left'}}>
                  <Form.Group className="mb-3" controlId="contact">
                    <Form.Label>Contacto</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nombre de contacto"
                      value={formData.contact}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="telephone">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Teléfono de contacto"
                      value={formData.telephone}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="rut">
                    <Form.Label>RUT</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="RUT"
                      value={formData.rut}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="city">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ciudad"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="region">
                    <Form.Label>Región</Form.Label>
                    <Form.Control
                      as="select"
                      value={formData.region}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una región</option>
                      {regionesChile.map((region) => (
                        <option key={region} value={region}>
                          {region}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Form.Label style={{paddingBottom: '10px', paddingTop: '10px'}}><h4>Datos de Facturación</h4></Form.Label>
                  <Form.Group className="mb-3" controlId="doc_sii">
                    <Form.Label>Tipo de Documento</Form.Label>
                    <Form.Control
                      as="select"
                      value={formData.doc_sii}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Boleta">Boleta</option>
                      <option value="Factura">Factura</option>
                    </Form.Control>
                  </Form.Group>
                  {/* Mostrar campos adicionales solo si se selecciona "Factura" */}
                  {formData.doc_sii === 'Factura' && (
                  <>
                    <Form.Group className="mb-3" controlId="razon_social">
                      <Form.Label>Razón Social</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Razón Social"
                        value={formData.razon_social}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="rut_razon_social">
                      <Form.Label>RUT Razón Social</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="RUT Razón Social"
                        value={formData.rut_razon_social}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </>
                  )}
                  <Form.Label style={{paddingBottom: '10px', paddingTop: '10px'}}><h4>Datos Bancarios</h4></Form.Label>
                  <Form.Group className="mb-3" controlId="pay_method">
                    <Form.Label>Tarjeta de Crédito</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="1234 2123 1221 3121"
                      value={formData.pay_method}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Label style={{paddingBottom: '10px', paddingTop: '10px'}}><h4>Datos de Envío</h4></Form.Label>
                <Form.Group className="mb-3" controlId="city_ship">
                  <Form.Label>Ciudad de Envío</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ciudad de Envío"
                    value={formData.city_ship}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="address_ship">
                  <Form.Label>Dirección de Envío</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Dirección de Envío"
                    value={formData.address_ship}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="region_ship">
                  <Form.Label>Región de Envío</Form.Label>
                  <Form.Control
                    as="select"
                    value={formData.region_ship}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona una región</option>
                    {regionesChile.map((region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>                            
                <Button variant="success" >
                  Comprar
                </Button>
                </Form>    
                  </div>
                  </div>
              </div>
              </div>
          </div>
          </div>
        </div>
    </div>
    </div>
    {/* end check out section */}
    </>
    {/* logo carousel */}
    <div className="logo-carousel-section">
        <div className="container">
        <div className="row">
            <div className="col-lg-12">
            <div className="logo-carousel-inner">
                <div className="single-logo-item">
                <img src="assets/img/company-logos/1.png" alt="" />
                </div>
                <div className="single-logo-item">
                <img src="assets/img/company-logos/2.png" alt="" />
                </div>
                <div className="single-logo-item">
                <img src="assets/img/company-logos/3.png" alt="" />
                </div>
                <div className="single-logo-item">
                <img src="assets/img/company-logos/4.png" alt="" />
                </div>
                <div className="single-logo-item">
                <img src="assets/img/company-logos/5.png" alt="" />
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    {/* end logo carousel */}
    <Footer></Footer>
    </>
  )
}

export default Cart;
