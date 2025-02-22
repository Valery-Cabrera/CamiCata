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
            <a href="https://api.whatsapp.com/send?phone=+3246185894&text=Hola%20Andrea,%20tengo%20una%20duda%20sobre%20la%20boda%20de%20Cami%20y%20Cata,%20me%20podr%C3%ADas%20ayudar%20por%20favor?" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} alt="whatsapp" className='img-whatsapp' />
            </a>
        </div>
    );
};


