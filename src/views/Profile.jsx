import React from "react";

/* Bootstrap */
import Button from "react-bootstrap/Button";

/*Components*/
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

/*React Router Dom*/
import { useNavigate, useParams} from 'react-router-dom';

/*Data*/
import { products_variant } from "../data/Products_variants";

/*Components */
import ProductCard from "../components/ProductCard";

/* Context */
import  Context  from "../contextproduct";
import { useContext } from 'react';

import { Link } from "react-router-dom";

const Profile = () => {

    const { id } = useParams();

    const product = products_variant.find((product) => product.id_product_variant === parseInt(id));

    const products = products_variant;

    /*Añade productos al cart*/
    const { cart, setCart } = useContext(Context);  
    
    

    // Formato peso chileno
    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-CL', {
          style: 'currency',
          currency: 'CLP',
        }).format(price);
    } 

    const user = {
        nombre: 'Juan',
        apellido: 'Pérez',
        email: 'juan.perez@gmail.com',
        rut: '12.345.678-9',
        direccion: 'Alameda 123',
        ciudad: 'Santiago',
        region: 'Metropolitana',
        telefono: '+56 9 1234 5678',
        rol: 'Tienda',
        nombreTienda: 'Tienda de Hierbas Naturales',
        razonSocialTienda: 'Natural Herbs Ltd.',
        rutTienda: '98.765.432-1',
        ciudadTienda: 'Santiago',
        regionTienda: 'Metropolitana',
      };

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
                            <h1>Perfil</h1>
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
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtyfGvEWYqRoktHKOFWkKIhsWvCnl1HosuCh-S_ELlamDq4oObc4_HISF1Urll6DIKVh8&usqp=CAU"
                                alt="Imagen de perfil"
                            />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="single-product-content">
                            <h3>{`${user.nombre} ${user.apellido}`}</h3>
                            <p className="single-product-pricing">
                                <span>Rol: {user.rol}</span>
                            </p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>RUT:</strong> {user.rut}</p>
                            <p><strong>Dirección:</strong> {user.direccion}</p>
                            <p><strong>Ciudad:</strong> {user.ciudad}</p>
                            <p><strong>Región:</strong> {user.region}</p>
                            <p><strong>Teléfono:</strong> {user.telefono}</p>
                            <h4>Tienda:</h4>
                            <p><strong>Nombre de la tienda:</strong> {user.nombreTienda}</p>
                            <p><strong>Razón Social:</strong> {user.razonSocialTienda}</p>
                            <p><strong>RUT de la tienda:</strong> {user.rutTienda}</p>
                            <p><strong>Ciudad de la tienda:</strong> {user.ciudadTienda}</p>
                            <p><strong>Región de la tienda:</strong> {user.regionTienda}</p>
                            <p><Button className="btn-success">Editar</Button></p>
                            <p><Button className="btn-success">
                                <Link to="/registrar-producto" style={{color:"#fff", textDecoration: "none", outline: "none"}}>Agregar Productos</Link>
                                </Button>
                            </p>                          
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
                            <h3><span className="orange-text">Mis</span> Productos</h3>
                            <div className="table-responsive">
                            <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                <th>Nombre</th>
                                <th>Variante</th>
                                <th>Stock</th>
                                <th>Precio</th>
                                <th>Editar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                <tr key={product.id_product_variant}>
                                    <td>{product.name}</td>
                                    <td>{product.variante}</td>
                                    <td>{product.stock}</td>
                                    <td>${product.price}</td>
                                    <td>
                                    <Button variant="success">Editar</Button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
                        </div>
                            
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        
                        {/*Components Product Card */}      
                        
                        
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

export default Profile;