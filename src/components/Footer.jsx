import React from 'react';
import '../assets/css/all.min.css';
import '../assets/bootstrap/css/bootstrap.min.css';
//import '../assets/css/owl.carousel.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/animate.css';
import '../assets/css/meanmenu.min.css';
import '../assets/css/main.css';
import '../assets/css/responsive.css';

import { Link } from 'react-router-dom';

const Footer = () => {

    return (

        <div>
        {/* footer */}
        <div className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-box about-widget">
                  <h2 className="widget-title">Acerca de</h2>
                  <p>Herbaland, marketplace de hierbas medicinales, ofrece una exquisita variedad de productos naturales y saludables. Nutre tu bienestar con la sabiduría de la naturaleza en cada taza. Bienvenido a una experiencia herbal única.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-box get-in-touch">
                  <h2 className="widget-title">Contacto</h2>
                  <ul>
                    <li>Alameda 121, Santiago, Chile</li>
                    <li>contacto@herbaland.cl</li>
                    <li>+56  951154585</li>                    
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-box pages">
                  <h2 className="widget-title">Páginas</h2>
                  <ul>
                    <li ><Link to="/">Home</Link></li>
                    <li><Link to="/market">Marketplace</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-box subscribe">
                  <h2 className="widget-title">Subscríbete</h2>
                  <p>Subscribete a nuestra página para estar enteredo de nuestras novedades</p>
                  <form action="index.html">
                    <input type="email" placeholder="Email" />
                    <button type="submit"><i className="fas fa-paper-plane" /></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end footer */}
        {/* copyright */}
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <p>Todos los derechos reservados 2023 - Herbaland</p>
              </div>
              <div className="col-lg-6 text-right col-md-12">
                <div className="social-icons">
                  <ul>
                    <li><a href="#" target="_blank"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-twitter" /></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-linkedin" /></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-dribbble" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end copyright */}
      </div>
    );
    }

export default Footer;