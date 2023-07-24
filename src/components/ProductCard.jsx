import React from 'react';
import { Card, Button } from 'react-bootstrap';

import '../assets/css/all.min.css';
import '../assets/bootstrap/css/bootstrap.min.css';
//import '../assets/css/owl.carousel.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/animate.css';
import '../assets/css/meanmenu.min.css';
import '../assets/css/main.css';
import '../assets/css/responsive.css';

/* React Router */
import { Link, useNavigate } from 'react-router-dom';

/* Context */
import  Context  from "../contextproduct";
import { useContext } from 'react';

/*Data */
import { products_variant } from '../data/Products_variants';

const ProductCard = (props) => {

  const product = props.product;
  const variant = props.variant;
  const price = props.price;
  const img = props.img;
  const id = props.id;

  const products = products_variant;

  const { cart, setCart } = useContext(Context);  

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

  console.log(cart)



  // Formato peso chileno
  const formattedPrice = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  }).format(price);

  return (
    <div className="col-lg-4 col-md-6 text-center">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{product} - <span>{variant}</span></Card.Title>
          <Card.Text>
            <span>{formattedPrice}</span>
          </Card.Text>
          <Card.Text>

          
          <Link to={`/product/${id}`}>     
            <Button variant="success" className="cart-btn" >
            <i className="fas fa-shopping-cart" /> Ver Más      
            </Button>   
          </Link>
       
          </Card.Text>
          <Button variant="success" className="cart-btn" onClick={() => addToCart(id)}>
            <i className="fas fa-shopping-cart" /> Agregar al carro
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
