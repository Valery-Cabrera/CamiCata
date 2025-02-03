import React from 'react';
import imagen from "../assets/logo-nombres.jpg";
import '../components/css/nombres.css';

export const Nombres = () => {
  return (
    <div className="content-nombres">
      <img src={imagen} alt="Cami & Cata" className='logo-nombres' />
    </div>
  );
};
