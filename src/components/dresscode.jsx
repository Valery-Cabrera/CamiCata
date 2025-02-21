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
      {/* <div className='container-colores'>
        <div className='color blanco' >
          <span className='tooltip'>Blanco</span>
        </div>
        <div className='color baige' >
          <span className='tooltip'>Baige</span>
        </div>
        <div className='color verde' >
          <span className='tooltip'>Verde</span>
        </div>
        <div className='color gris' >
          <span className='tooltip'>Gris</span>
        </div>
        <div className='color plateado' >
          <span className='tooltip'>Plateado</span>
        </div>
      </div> */}

      <div className='sugerencia-dresscode'>
        <div>
          <p>Ellas</p>

          <div className='container-colores'>
            <div className='color blanco' >
              <span className='tooltip'>Blanco</span>
            </div>
            <div className='color baige' >
              <span className='tooltip'>Baige</span>
            </div>
            <div className='color verde' >
              <span className='tooltip'>Verde</span>
            </div>
          </div>




          <button onClick={() => {
            window.open('https://co.pinterest.com/valderramacabreracc/dress-code-mujer/?invite_code=5906a549cfb2494b96f66ccad0ee940c&sender=892416619819831685', '_blank');
          }}>
            Ideas mujeres
          </button>
        </div>

        <div>

          <p>Ellos</p>

          <div className='container-colores'>
            <div className='color verde' >
              <span className='tooltip'>Verde</span>
            </div>
          </div>

          <button onClick={() => {
            window.open('https://co.pinterest.com/valderramacabreracc/dress-code-hombre/?invite_code=10e911171b5b4b1cade72d16600bdd12&sender=892416619819831685', '_blank');
          }}>
            Ideas hombres
          </button>
        </div>

      </div>
    </div>
  );
};


