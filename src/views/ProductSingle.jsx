import React from "react";

/*Components*/
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

/*React Router Dom*/
import { useNavigate, useParams} from 'react-router-dom';

/*Data*/
import { products_variant } from "../data/Products_variants";

/*Components */
import ProductCard from "../components/ProductCard";


const ProductSingle = () => {

    const { id } = useParams();

    const product = products_variant.find((product) => product.id_product_variant === parseInt(id));

    const products = products_variant;



    // Formato peso chileno
    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-CL', {
          style: 'currency',
          currency: 'CLP',
        }).format(price);
    }
      

  

    return (
        <>
            <Navbar />
            <div>
                {/* breadcrumb-section */}
                <div className="breadcrumb-section breadcrumb-bg">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="breadcrumb-text">                            
                            <h1>{product.name}</h1>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* end breadcrumb section */}
                {/* single product */}
                <div className="single-product mt-150 mb-150">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                        <div className="single-product-img">
                            <img src="https://pymstatic.com/27652/conversions/manzanilla-wide.jpg" alt="" />
                        </div>
                        </div>
                        <div className="col-md-7">
                        <div className="single-product-content">
                            <h3>{product.name}</h3>
                            <p className="single-product-pricing"><span>{product.variante}</span> {formatPrice(product.price)}</p>
                            <p>{product.description}</p>
                            <div className="single-product-form">
                            <form action="index.html">
                                <input type="number" placeholder={0} />
                            </form>
                            <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart" /> Agrgar al carro</a>
                            <p><strong>Categoría: </strong>Hierbas</p>
                            </div>
                            <h4>Compartir:</h4>
                            <ul className="product-share">
                            <li><a href><i className="fab fa-facebook-f" /></a></li>
                            <li><a href><i className="fab fa-twitter" /></a></li>                           
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* end single product */}
                {/* more products */}
                <div className="more-products mb-150">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title">	
                            <h3><span className="orange-text">Productos</span> Recomendados</h3>
                            <p>Descubre el poder de la naturaleza con nuestros productos de hierbas naturales para consumo. En nuestra tienda, encontrarás una amplia variedad de hierbas cuidadosamente seleccionadas para brindarte beneficios para tu bienestar físico y mental.</p>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        
                        {/*Components Product Card */}      
                        {products.slice(0, 3).map((product) => (
                            <ProductCard
                                key={product.id_product_variant} // Asegúrate de agregar una clave única para cada elemento en el mapa
                                product={product.name}
                                variant={product.variante}
                                price={product.price}
                                img={"https://pymstatic.com/27652/conversions/manzanilla-wide.jpg"}
                                id={product.id_product_variant.toString()}
                            />
                        ))}
                        
                    </div>
                    </div>
                </div>
                {/* end more products */}
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
            <Footer />
        </>
    );
}

export default ProductSingle;