import React from 'react';


import '../assets/css/all.min.css';
import '../assets/bootstrap/css/bootstrap.min.css';
//import '../assets/css/owl.carousel.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/animate.css';
import '../assets/css/meanmenu.min.css';
import '../assets/css/main.css';
import '../assets/css/responsive.css';

/* Componentes  */
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

/*Data */
import { products_variant } from '../data/Products_variants';




const Marketplace = () => {

    const products = products_variant;

    return (
        <>
            <Navbar />             
            <div>
                {/* search area */}
                <div className="search-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <span className="close-btn"><i className="fas fa-window-close" /></span>
                        <div className="search-bar">
                            <div className="search-bar-tablecell">
                            <h3>Search For:</h3>
                            <input type="text" placeholder="Keywords" />
                            <button type="submit">Search <i className="fas fa-search" /></button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* end search arewa */}
                {/* breadcrumb-section */}
                <div className="breadcrumb-section breadcrumb-bg">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="breadcrumb-text">
                            <p>Fresco y Orgánico</p>
                            <h1>Marketplace</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* end breadcrumb section */}
                {/* products */}
                <div className="product-section mt-150 mb-150">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="product-filters">
                            <ul>
                            <li className="active" data-filter="*">All</li>
                            <li data-filter=".strawberry">Strawberry</li>
                            <li data-filter=".berry">Berry</li>
                            <li data-filter=".lemon">Lemon</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="row product-lists">
                        {products.map((product) => (
                            <ProductCard product={product.name} variant={product.variante} price={product.price} img={"https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__medium/public/media/2019/04/23/menta_p.jpg"} id={product.id_product_variant} />
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <div className="pagination-wrap">
                            <ul>
                            <li><a href="#">Prev</a></li>
                            <li><a href="#">1</a></li>
                            <li><a className="active" href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">Next</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* end products */}
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
                </div>
            {/* footer */}
            <Footer />                  
        </>
    );
};

export default Marketplace;
