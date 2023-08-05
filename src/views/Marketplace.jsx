import React, {useState, useEffect} from 'react';

import '../assets/css/all.min.css';
import '../assets/bootstrap/css/bootstrap.min.css';
//import '../assets/css/owl.carousel.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/animate.css';
import '../assets/css/meanmenu.min.css';
import '../assets/css/main.css';
import '../assets/css/responsive.css';

/* Bootstrap */
import Button from 'react-bootstrap/Button';

/* Componentes  */
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

/*Data */
import { products_variant } from '../data/Products_variants';

const Marketplace = () => {

    const [products, setProducts] = useState('');

    //Ordenar los productos
    const [orderType, setOrderType] = useState(''); // 'alphabetical' o 'price'
    const [ascendingOrder, setAscendingOrder] = useState(true);

    const handleSortByAlphabet = () => {
        setCurrentPage(1); // Reiniciar a la primera página
        setOrderType('alphabetical');
        setAscendingOrder(!ascendingOrder);
    };
    
    const handleSortByPrice = () => {
        setCurrentPage(1); // Reiniciar a la primera página
        setOrderType('price');
        setAscendingOrder(!ascendingOrder);
    };



// ... Renderizar los productos ordenados

    

    // Paginación
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    /* Obtener productos */
    const getProducts = () => {
        try {
          fetch('http://localhost:3002/products/')
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok'); 
              }
              return response.json();
            })
            .then(data => {
              console.log(data);
              setProducts(data);
            })
            .catch(error => {
              console.error('Error:', error); 
              
            });
        } catch (error) {
          console.error('Error:', error); 
         
        }
    };
      

    useEffect(() => {
        getProducts();
    }, []);

    // Paginacion 
    // Calcular el índice inicial y final de los productos a mostrar en la página actual
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calcular la cantidad total de páginas
    const totalPages = Math.ceil(products.length / productsPerPage);

    // Función para cambiar la página actual
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    console.log(currentProducts)
    console.log(indexOfFirstProduct)
    console.log(indexOfLastProduct)

    //Ordernar productos

    const sortedProducts = [...currentProducts]; // Crear una copia para evitar mutaciones

    if (orderType === 'alphabetical') {
        sortedProducts.sort((a, b) =>
            ascendingOrder
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name)
        );
    } else if (orderType === 'price') {
        sortedProducts.sort((a, b) =>
            ascendingOrder ? a.price - b.price : b.price - a.price
        );
    }

    
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
                                                      
                            <li>
                                <Button className='btn-success' onClick={handleSortByAlphabet}>
                                    Ordenar por Nombre {ascendingOrder ? '↑' : '↓'}
                                </Button>
                            </li>
                            <li>
                                <Button className='btn-success' onClick={handleSortByPrice}>
                                    Ordenar por Precio {ascendingOrder ? '↑' : '↓'}
                                </Button>
                            </li>
                        </ul>
                    </div>

                        </div>
                    </div>
                    <div className="row product-lists">
                    {Array.isArray(sortedProducts) && currentProducts.length > 0 ? (
                        sortedProducts.map((product) => (
                            <ProductCard key={product.id_products} product={product.name} variant={product.variant} price={product.price} img={product.photo} id={product.id_products} />
                        ))
                    ) : (
                        <p>No hay productos para mostrar en esta página.</p>
                    )}
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <div className="pagination-wrap">
                            <ul>
                                <li>
                                    <Button className='btn btn-success' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Prev</Button>
                                </li>
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <li key={index}>
                                    <Button onClick={() => handlePageChange(index + 1)} className={`${currentPage === index + 1 ? 'active' : ''} btn btn-success`}>{index + 1}</Button>

                                    </li>
                                ))}
                                <li>
                                    <Button className='btn btn-success' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Sig</Button>
                                </li>
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
