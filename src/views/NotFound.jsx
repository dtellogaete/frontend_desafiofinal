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

/* Componentes  */
import Navbar from '../components/Nav';
import Footer from '../components/Footer';

const NotFound = () => {
    return (
        <div>
            <div>
            {/* breadcrumb-section */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                    <div className="breadcrumb-text">
                        <p>Herbaland</p>
                        <h1>404 - Not Found</h1>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* end breadcrumb section */}
            {/* error section */}
            <div className="full-height-section error-section" style={{paddingTop: "50px", paddingBottom: "50px"}}>
                <div className="full-height-tablecell">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="error-text">
                        <i className="far fa-sad-cry" />
                        <h1>Oops! No encontrado.</h1>
                        <p>La página que tu buscas no se encuentra.</p>
                        <Link to="/" className="boxed-btn">Volver al inicio</Link>

                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* end error section */}
            </div>
            <Footer />
        </div>
    )
}

export default NotFound;