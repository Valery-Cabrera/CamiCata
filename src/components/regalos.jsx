import React from 'react';
import imagen from "../assets/regalo.png";
import '../components/css/regalos.css';

export const Regalos = () => {
    return (
        <div className="content-regalos">
            <img src={imagen} alt="Regalo" className='img-regalo' />
            <h2>¡El regalo es opcional... tu presencia obligatoria!</h2>
            <p>¡Pero si quieres tener un detalle con nosotros que mejor que hacer parte de nuestro nuevo hogar y futura luna de miel! ¡Tu regalo nos ayudará a crear recuerdos y construir nuestro futuro juntos!</p>
            <button onClick={() => {
                window.location.href = 'https://co.pinterest.com/valderramacabreracc/dress-code-hombre/?invite_code=10e911171b5b4b1cade72d16600bdd12&sender=892416619819831685';
            }}>
                ¡Haz llegar tu regalo aquí!
            </button>
        </div>
    );
};
