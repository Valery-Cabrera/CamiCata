import React from 'react';
import imgDresscode from "../assets/dresscode.png";
import '../components/css/dresscode.css';

export const Dresscode = () => {
  return (
    <div className='container-dress-code'>
      <h2> DRESS CODE</h2>
      <img src={imgDresscode} alt="dresscode" className='img-dresscode' />
      <p>
        La elegancia también llega a la playa. Es por eso que te invitamos a lucir un hermoso vestido largo sin estampado y camisa manga larga y pantalón.
      </p>
      <p>Colores reservados</p>
      <div className='container-colores'>
        <div className='color op1' >
          <span className='tooltip'>Blanco</span>
        </div>
        <div className='color op2' >
          <span className='tooltip'>Verde</span>
        </div>
        <div className='color op3' >
          <span className='tooltip'>Verde</span>
        </div>
        <div className='color op4' >
          <span className='tooltip'>Gris</span>
        </div>
      </div>

      <div className='sugerencia-dresscode'>
        <button onClick={() => {
          window.location.href = 'https://co.pinterest.com/valderramacabreracc/dress-code-mujer/?invite_code=5906a549cfb2494b96f66ccad0ee940c&sender=892416619819831685';
        }}>
          Ideas mujeres
        </button>
        <button onClick={() => {
          window.location.href = 'https://co.pinterest.com/valderramacabreracc/dress-code-hombre/?invite_code=10e911171b5b4b1cade72d16600bdd12&sender=892416619819831685';
        }}>
          Ideas hombres
        </button>
      </div>
    </div>
  );
};


