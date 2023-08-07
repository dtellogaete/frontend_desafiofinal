import React, {useState, useEffect} from "react";

/* Bootstrap */
import Button from "react-bootstrap/Button";

/*Components*/
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

/*Axios */
import axios from "axios";

/*React Router Dom*/
import { useNavigate, useParams} from 'react-router-dom';

/*Data*/
import { products_variant } from "../data/Products_variants";

/*Components */
import ProductCard from "../components/ProductCard";

/* Context */
import Context  from "../contextproduct";
import ContextUser from "../context";
import { useContext } from 'react';

import { Link} from "react-router-dom";


const Profile = () => {

    const { id } = useParams();

    
    //Navigate
    const navigate = useNavigate();

    

    /*Añade productos al cart*/
    const { cart, setCart } = useContext(Context);  

    /* Usuario Validacion*/
    const { setUsuario: setUsuarioGlobal } = useContext(ContextUser); 
    const [usuario, setUsuarioLocal] = useState({});  
    const { token } = useContext(ContextUser);

    /* Obtener datos del usuario */
    const getUsuarioData = async () => {
        const urlServer = "http://localhost:3002";
        const endpoint = "/users";
         try {
          const { data } = await axios.get(urlServer + endpoint, {
            headers: { Authorization: "Bearer " + token.token },
          });
          setUsuarioGlobal(data);
          setUsuarioLocal(data);
          getProducts(data.id_users);
          getTicketId(data.id_users);
        } catch(error) {
            navigate("/")
          
          console.log(error + " 🙁");
        //catch ({ response: { data: message } }) {
          //alert(message + " 🙁");
          //console.log(message);
        }
      };

    /* Obtener productos del usuario */
    const [products, setProducts] = useState([]);
    const getProducts = async (id_user) => {
        try {
            const urlServer = "http://localhost:3002";
            const endpoint = `/products/users/${id_user}`;
            
            const response = await axios.get(urlServer + endpoint);
            const data = response.data;
            
            setProducts(data);
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    //Obtener tickets del usuario
    const [tickets, setTickets] = useState([]);

    const getTicketId = async (id_user) => {
        try {
            const urlServer = "http://localhost:3002";
            const endpoint = `/tickets/users/${id_user}`;
    
            const response = await axios.get(urlServer + endpoint);
            const data = response.data;
            console.log(data);
            setTickets(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    useEffect(() => {
    const fetchData = async () => {
        try {
            await getUsuarioData();            
            
            //getTicketId();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    console.log("usuario",usuario)

    fetchData();

   


    if (localStorage.username ==! "") {
        navigate("/");
    }
    }, []);


    /* Delete producto */
    const deleteProduct = async (id_product_variant) => {
        const isConfirmed = window.confirm(
            "¿Está seguro que desea eliminar este producto? Esta acción es irreversible."
        );

        if (!isConfirmed) {
            return; // El usuario canceló la eliminación
        }

        try {
            const urlServer = "http://localhost:3002";
            const endpoint = `/products/${id_product_variant}`;
            const response = await axios.delete(urlServer + endpoint);
            const data = response.data;
            console.log(data);
            getProducts(usuario.id_users);
        } catch (error) {
            console.error('Error:', error);
        }
    };   

    // Formato peso chileno
    const formatPrice = (price) => {
        return new Intl.NumberFormat('es-CL', {
          style: 'currency',
          currency: 'CLP',
        }).format(price);
    } 

    //Funcoion para transformar unix a fecha
    function convertUnixToDate(unixTimestamp) {
        const date = new Date(unixTimestamp * 1000); // Multiplica por 1000 para convertir segundos a milisegundos
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Los meses en JavaScript van de 0 a 11
        const year = date.getFullYear();
    
        return `${day}-${month}-${year}`;
    }

    const handleClick = () => {
        navigate("/editar-perfil")
    };

    const handleClickProducto = (id) => {
        navigate("/editar-producto/"+ id)
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
                            <h1>{`Perfil - ${usuario.name} ${usuario.lastname}`}</h1>
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
                            <h3>{`${usuario.name} ${usuario.lastname}`}</h3>
                            <p className="single-product-pricing">
                                <span>Rol: {usuario.role}</span>
                            </p>
                            <p><strong>Email:</strong> {usuario.email}</p>
                            <p><strong>RUT:</strong> {usuario.rut}</p>
                            <p><strong>Dirección:</strong> {usuario.address}</p>
                            <p><strong>Ciudad:</strong> {usuario.city}</p>
                            <p><strong>Región:</strong> {usuario.region}</p>
                            <p><strong>Teléfono:</strong> {usuario.telephone}</p>
                            {/* Rol de Usuario Tienda */}
                            {usuario.role === "Tienda" && (
                                <div>
                                   <h4>Tienda:</h4>
                                   <p><strong>Nombre de la tienda:</strong> {usuario.store_name}</p>
                                   <p><strong>Razón Social:</strong> {usuario.store_razon}</p>
                                   <p><strong>RUT de la tienda:</strong> {usuario.store_rut}</p>
                                   <p><strong>Ciudad de la tienda:</strong> {usuario.store_city}</p>
                                   <p><strong>Región de la tienda:</strong> {usuario.store_region}</p>
                                </div>
                            )}
                         
                            <p><Button className="btn-success" onClick={handleClick} >Editar</Button></p>
                            {usuario.role === "Tienda" && (
                                <p><Button className="btn-success">
                                <Link to="/registrar-producto" style={{color:"#fff", textDecoration: "none", outline: "none"}}>Agregar Productos</Link>
                                </Button>
                                </p>   
                            )}
                                                   
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
                                <th>Borrar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                <tr key={product.id_product_variant}>
                                    <td>{product.name}</td>
                                    <td>{product.variant}</td>
                                    <td>{product.stock}</td>
                                    <td>{formatPrice(product.price)}</td>
                                    <td>
                                    <Button variant="success" onClick={()=> handleClickProducto(product.id_products)}>Editar</Button>
                                    </td>
                                    <td>
                                    <Button variant="danger" onClick={()=> deleteProduct(product.id_products)}>Borrar</Button>
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
                {/* more products */}
                <div className="more-products mb-150">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                        <div className="section-title">	
                            <h3><span className="orange-text">Mis</span> Compras</h3>
                            <div className="table-responsive">
                            <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                <th>Ticket</th>                              
                                <th>Fecha</th>
                                <th>Total</th>
                                <th>Cancelar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tickets.map((tik) => (
                                <tr key={tik.id_tickets}>
                                    <td>{tik.id_tickets}</td>
                                    <td>{convertUnixToDate(tik.dateticket)}</td>
                                    <td>{formatPrice(tik.total)}</td>
                                 
                                    <td>
                                    <Button variant="danger">Cancelar</Button>
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