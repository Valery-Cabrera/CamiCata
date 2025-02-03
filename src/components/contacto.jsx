import React from 'react';
import whatsapp from "../assets/whatsapp.png";
import '../components/css/contacto.css';

export const Contacto = () => {
    return (
        <div className='container-contacto'>
            <h2>Contacto</h2>
            <p>
                Si tienes alguna duda comunicate con nuestra wedding planner
            </p>
            <a href="https://wa.link/m13u2r">
                <img src={whatsapp} alt="whatsapp" className='img-whatsapp' />
            </a>
        </div>
    );
};


