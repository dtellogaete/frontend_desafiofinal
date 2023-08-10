import React, {useEffect, useState} from "react";

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

const ProductSingle = () => {

    const { id } = useParams();

    const [product, setProduct] = useState('');
    const [isLoadingProduct, setIsLoadingProduct] = useState(true);

    /* Obtener un producto por su ID */
    const getProductId = (id_product) => {
        setIsLoadingProduct(true);

        fetch('https://backend-4vyy.onrender.com/products/' + id_product)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setProduct(data);
            setIsLoadingProduct(false);
        })
        .catch(error => {
            console.error('Error:', error);
            setIsLoadingProduct(false);
        });
    }

    const [products, setProducts] = useState([]);
    const [isLoadingProducts, setIsLoadingProducts] = useState(true);

    /* Obtener productos y seleccionar los primeros 3 */
    const getProduct = () => {
        setIsLoadingProducts(true);

        fetch('https://backend-4vyy.onrender.com/productsstock/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const selectedProducts = data.slice(0, 3);

            setProducts(selectedProducts);
            setIsLoadingProducts(false);
        })
        .catch(error => {
            console.error('Error:', error);
            setIsLoadingProducts(false);
        });
    }

    useEffect(() => {
        getProductId(id);
        getProduct();
    }, []);

    console.log(products);    

    

    /*Añade productos al cart*/
    const { cart, setCart } = useContext(Context);  
    
    const addToCart = (id) => {    
        const productoExistente = cart.find((p) => p.id === id);
        const quantityInput = document.getElementById('quantityInput');

        // Get the value of the quantity input field
        const quantity = parseInt(quantityInput.value);
        if (productoExistente) {          
            const nuevosProductos = cart.map((p) =>
            p.id === id ? { ...p, cantidad: p.cantidad + quantity } : p
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
                            <img src={product.photo} alt="" />
                        </div>
                        </div>
                        <div className="col-md-7">
                        <div className="single-product-content">
                            <h3>{product.name}</h3>
                            <p className="single-product-pricing"><span>{product.variante}</span> {formatPrice(product.price)}</p>
                            <p>{product.description}</p>
                            <div className="single-product-form">
                            <form action="index.html">
                                <input type="number" placeholder={0} id="quantityInput"/>
                            </form>
                            <Button variant="success" className="cart-btn" onClick={() => addToCart(parseInt(id))}>
                                <i className="fas fa-shopping-cart" /> Agregar al carro
                            </Button>
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
                    {isLoadingProducts ? (
                        <p>Cargando productos...</p>
                    ) : (
                        <div className="row">
                            {products.map((product) => (
                                    <ProductCard
                                        key={product.id_products} // Asegúrate de agregar una clave única para cada elemento en el mapa
                                        product={product.name}
                                        variant={product.variant}
                                        price={product.price}
                                        img={product.photo}
                                        id={product.id_products.toString()}
                                    />
                                ))}   
                        </div>
                    )}                    
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