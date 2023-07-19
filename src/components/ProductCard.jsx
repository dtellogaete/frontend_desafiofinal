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

const ProductCard = (props) => {

  const product = props.product;
  const variant = props.variant;
  const price = props.price;
  const img = props.img;

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
          <Button variant="success" className="cart-btn" href="cart.html">
            <i className="fas fa-shopping-cart" /> Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
