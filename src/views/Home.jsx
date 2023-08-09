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

/* Context */
import  Context  from "../contextproduct";
import { useContext } from 'react';



const Home = () => {

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
            const producto = products.find((p) => p.id === id);
            console.log(producto)
        if (producto) {
            setCart([...cart, { id, cantidad: 1 }]);
        }
    }
    };

   

    return (
        <>
            <Navbar />             
                <div>
            {/* hero area */}
            <div className="shop-banner " style={{paddingTop:"200px", }}>
            <div className="shop-banner-content container">
                <div className="row">
                <div className="col-lg-12  text-center">
   
                    <div className="hero-text" style={{fontWeight:"700", fontSize:"64px", lineHeight: "1.3", color: "#fff"}}>                        
                        <h1>Herbaland </h1>
                        <div className="hero-btns">                       
                    </div>                   
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* end hero area */}
            {/* features list section */}
            <div className="list-section pt-80 pb-80">
            <div className="container">
                <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <div className="list-box d-flex align-items-center">
                    <div className="list-icon">
                        <i className="fas fa-shipping-fast" />
                    </div>
                    <div className="content">
                        <h3>Envío Gratis</h3>
                        <p>Por compras sobre $100.000</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                    <div className="list-box d-flex align-items-center">
                    <div className="list-icon">
                    <i className="fas fa-solid fa-leaf" />
                    </div>
                    <div className="content">
                        <h3>Ingredientes</h3>
                        <p>100% Natural</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="list-box d-flex justify-content-start align-items-center">
                    <div className="list-icon">
                        <i className="fas fa-solid fa-heart" />
                    </div>
                    <div className="content">
                        <h3>Saludable</h3>
                        <p>Previene Enfermedades</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* end features list section */}
            {/* product section */}
            <div className="product-section mt-150 mb-150">
            <div className="container">
                <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                    <div className="section-title">	
                    <h3>Top más <span className="orange-text">Vendidos</span> </h3>
                    <p>Conoce los mejores productos de nuestra plataforma</p>
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
            {/* end product section */}

            {/* testimonail-section */}
            <div className="testimonail-section mt-150 mb-150">
            <div className="section-title text-center">	
                <h3><span className="orange-text">Comentarios </span> de Clientes</h3>                
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center">
                        <div className="testimonial-sliders">
                            <div className="single-testimonial-slider">
                                <div >
                                    <img src="/img/avatar1.png" alt="" />
                                </div>
                                <div className="client-meta">
                                    <h3>Juan Pérez <span>Santiago</span></h3>
                                    <p className="testimonial-body">
                                        "Excelente variedad de hierbas en Herbaland. He encontrado productos ideales para mi bienestar. ¡Gracias!"
                                    </p>
                                    <div className="last-icon">
                                        <i className="fas fa-quote-right" />
                                    </div>
                                </div>
                            </div>
                            <div className="single-testimonial-slider">
                                <div className="client-avater">
                                    <img src="/img/avaters/avatar2.png" alt="" />
                                </div>
                                <div className="client-meta">
                                    <h3>Josefa Martínez <span>Valparaíso</span></h3>
                                    <p className="testimonial-body">
                                        "Recomiendo Herbaland a todos. Sus infusiones tienen un sabor y calidad excepcionales. ¡Increíble!"
                                    </p>
                                    <div className="last-icon">
                                        <i className="fas fa-quote-right" />
                                    </div>
                                </div>
                            </div>
                            <div className="single-testimonial-slider">
                                <div className="client-avater">
                                    <img src="assets/img/avaters/avatar3.png" alt="" />
                                </div>
                                <div className="client-meta">
                                    <h3>Jacob Vidal <span>Concepción</span></h3>
                                    <p className="testimonial-body">
                                        "Herbaland me ha ayudado a mejorar mi bienestar. Sus productos son realmente efectivos. ¡Muy satisfecho!"
                                    </p>
                                    <div className="last-icon">
                                        <i className="fas fa-quote-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            {/* end testimonail-section */}
            {/* advertisement section */}
            <div className="abt-section mb-150">
            <div className="container">
                <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="abt-bg">
                    <a href="https://www.youtube.com/watch?v=DBLlFWYcIGQ" className="video-play-btn popup-youtube"><i className="fas fa-play" /></a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="abt-text">
                    <p className="top-sub">Desde 2005</p>
                    <h2>Somos <span className="orange-text">Herbaland</span></h2>
                    <p>Herbaland es un maravilloso marketplace de hierbas medicinales que te sorprenderá con su amplia gama de productos naturales. Nuestro compromiso es brindar productos de alta calidad para mejorar tu bienestar y salud.</p>

                    <p>Explora nuestra selección de infusiones curativas, extractos beneficiosos y tés aromáticos que han sido cuidadosamente seleccionados para proporcionarte una experiencia herbal única y enriquecedora.</p>

                    <a href="about.html" className="boxed-btn mt-4">Conoce más</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* end advertisement section */}
            {/* shop banner */}
            <section className="shop-banner">
            <div className="container">                          
                <h3 style={{ color: "white", fontStyle: "italic" }}>Que la comida sea tu alimento y el alimento tu medicina</h3>                
            </div>
            </section>
            {/* end shop banner */}
            {/* latest news */}
            <div className="latest-news pt-150 pb-150">
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title">	
                            <h3><span className="orange-text">Nuestras</span> Noticias</h3>
                            <p>Descubre nuestras últimas noticias</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-latest-news">
                            <a href="single-news.html"><div className="latest-news-bg news-bg-1" /></a>
                            <div className="news-text-box">
                                <h3><a href="single-news.html">Descubre los beneficios de la menta para tu salud.</a></h3>
                                <p className="blog-meta">
                                    <span className="author"><i className="fas fa-user" /> Admin</span>
                                    <span className="date"><i className="fas fa-calendar" /> 27 de diciembre, 2023</span>
                                </p>
                                <p className="excerpt">La menta es una hierba versátil que ofrece propiedades medicinales y un delicioso sabor. Conoce más sobre sus beneficios aquí.</p>
                                <a href="single-news.html" className="read-more-btn">Leer más <i className="fas fa-angle-right" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-latest-news">
                            <a href="single-news.html"><div className="latest-news-bg news-bg-2" /></a>
                            <div className="news-text-box">
                                <h3><a href="single-news.html">Tomillo: una maravillosa hierba llena de propiedades.</a></h3>
                                <p className="blog-meta">
                                    <span className="author"><i className="fas fa-user" /> Admin</span>
                                    <span className="date"><i className="fas fa-calendar" /> 27 de diciembre, 2023</span>
                                </p>
                                <p className="excerpt">El tomillo es una hierba aromática y medicinal que se ha utilizado durante siglos. Descubre todo lo que tiene para ofrecer.</p>
                                <a href="single-news.html" className="read-more-btn">Leer más <i className="fas fa-angle-right" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                        <div className="single-latest-news">
                            <a href="single-news.html"><div className="latest-news-bg news-bg-3" /></a>
                            <div className="news-text-box">
                                <h3><a href="single-news.html">Manzanilla: una aliada natural para tu bienestar.</a></h3>
                                <p className="blog-meta">
                                    <span className="author"><i className="fas fa-user" /> Admin</span>
                                    <span className="date"><i className="fas fa-calendar" /> 27 de diciembre, 2023</span>
                                </p>
                                <p className="excerpt">La manzanilla es una hierba popular con beneficios relajantes y digestivos. Descubre cómo puede mejorar tu calidad de vida.</p>
                                <a href="single-news.html" className="read-more-btn">Leer más <i className="fas fa-angle-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <a href="news.html" className="boxed-btn">Más Noticias</a>
                    </div>
                </div>
                </div>
            </div>
            {/* end latest news */}
            {/* logo carousel */}
            <div >
            <div className="container" style={{paddingBottom: '10px'}}>
                <div className="row justify-content-center">
                    <div className="col-lg-2 mb-4">
                        <div className="single-logo-item text-center">
                            <img src="/assets/img/company-logos/1.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2 mb-4">
                        <div className="single-logo-item text-center">
                            <img src="/img/company-logos/2.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2 mb-4">
                        <div className="single-logo-item text-center">
                            <img src="/img/company-logos/3.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2 mb-4">
                        <div className="single-logo-item text-center">
                            <img src="/img/company-logos/4.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-2 mb-4">
                        <div className="single-logo-item text-center">
                            <img src="/img/company-logos/5.png" alt="" />
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

export default Home;
