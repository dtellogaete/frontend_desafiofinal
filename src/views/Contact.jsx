import React, {useState, useEffect} from "react";

/*Components*/
import Navbar from "../components/Nav";
import Footer from "../components/Footer";

/* Axios */
import axios from 'axios';

/* Button Bootstrap */
import Button from "react-bootstrap/Button";

/* React Router  */
import { useNavigate } from "react-router-dom";

const Contact = () => {

    /* Navigate */
    const navigate = useNavigate();

    /* Post contact */
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setContact((prevContact) => ({
            ...prevContact,
            [name]: value
        }));
    };

    console.log("contacto", contact)

    const addContact = async () => {
        try {
            const urlServer = "http://localhost:3002";
            const endpoint = '/contact';
            const response = await axios.post(urlServer + endpoint, contact); 
            console.log('Respuesta del servidor:', response.data);
            alert('Mensaje enviado con éxito');
            navigate('/');
            // Realiza las acciones necesarias después de registrar el producto
            } catch (error) {
            console.log('Error al registrar el producto:', error);
            }
        };   


    return (
        <>
        <div>
        <Navbar></Navbar>
        </div>
        {/* breadcrumb-area */}
        <>
        {/* breadcrumb-section */}
        <div className="breadcrumb-section breadcrumb-bg">
            <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                <div className="breadcrumb-text">
                    <p>Soporte las 24 horas</p>
                    <h1>Contáctanos </h1>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* end breadcrumb section */}
        </>       
        {/* contact form */}
        <div className="contact-from-section mt-150 mb-150">
            <div className="container">
            <div className="row">
                <div className="col-lg-8 mb-5 mb-lg-0">
                <div className="form-title">
                    <h2>¿Tienes alguna pregunta?</h2>
                    <p>
                    Envíanos un mensaje.
                    </p>
                </div>
                <div id="form_status" />
                <div className="contact-form">
                    <form
                    type="POST"
                    id="fruitkha-contact"
                    onsubmit="return valid_datas( this );"
                    >
                    <p>
                        <input type="text" placeholder="Nombre" name="name" id="name" onChange={handleInputChange} />
                        <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"
                        onChange={handleInputChange}
                        />
                    </p>
                    <p>
                        <input type="tel" placeholder="Teléfono" name="phone" id="phone" onChange={handleInputChange} />
                        <input
                        type="text"
                        placeholder="Asunto"
                        name="subject"
                        id="subject"
                        onChange={handleInputChange}
                        />
                    </p>
                    <p>
                        <textarea
                        name="message"
                        id="message"
                        onChange={handleInputChange}
                        cols={30}
                        rows={10}
                        placeholder="Escribe tu mensaje..."
                        defaultValue={""}
                        />
                    </p>
                    <input type="hidden" name="token" defaultValue="FsWga4&@f6aw" />
                    <p>
                        < Button className="btn-success" onClick={() => addContact()} >
                            Enviar mensaje
                        </Button>
                    </p>
                    </form>
                </div>
                </div>
                <div className="col-lg-4">
                <div className="contact-form-wrap">
                    <div className="contact-form-box">
                    <h4>
                        <i className="fas fa-map" /> Oficina
                    </h4>
                    <p>
                        Alameda 121 <br /> Santiago Centro <br /> Chile
                    </p>
                    </div>
                    <div className="contact-form-box">
                    <h4>
                        <i className="far fa-clock" /> Horarios presenciales
                    </h4>
                    <p>
                        LUN - VIE: 8 a 9 PM <br /> SAB - DOM: 10 a 8 PM{" "}
                    </p>
                    </div>
                    <div className="contact-form-box">
                    <h4>
                        <i className="fas fa-address-book" /> Contact
                    </h4>
                    <p>
                        Teléfono: +56 912345678 <br /> Email: contacto@herbaland.cl
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* end contact form */}
        {/* find our location */}
        <div className="find-location blue-bg">
            <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                <p>
                    {" "}
                    <i className="fas fa-map-marker-alt" /> Encuentra nuestras oficinas
                </p>
                </div>
            </div>
            </div>
        </div>
        {/* end find our location */}
        {/* google map section */}
        <div className="embed-responsive embed-responsive-21by9">
            
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.4406937749145!2d-70.65537281694215!3d-33.43782330479412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a390957307%3A0xef87ffe6bed7c7!2sPlaza%20de%20Armas%20de%20Santiago!5e0!3m2!1ses-419!2smx!4v1690211362366!5m2!1ses-419!2smx"
  width={600}
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
        </div>
        {/* end google map section */}
        <Footer></Footer>
        </>   

    )
};

export default Contact;