import React, { useState, useEffect } from "react";
import '../components/css/carousel.css';
import imagen1 from "../assets/carousel/Imagen1.jpg";
import imagen2 from "../assets/carousel/Imagen2.jpg";
import imagen3 from "../assets/carousel/Imagen3.jpg";
import imagen4 from "../assets/carousel/Imagen4.jpg";
import imagen5 from "../assets/carousel/Imagen5.jpg";
import imagen6 from "../assets/carousel/Imagen6.jpg";
import imagen7 from "../assets/carousel/Imagen7.jpg";
import imagen8 from "../assets/carousel/Imagen8.jpg";
import imagen9 from "../assets/carousel/Imagen9.jpg";
import imagen10 from "../assets/carousel/Imagen10.jpg";
import imagen11 from "../assets/carousel/Imagen11.jpg";
import imagen12 from "../assets/carousel/Imagen12.jpg";
import imagen13 from "../assets/carousel/Imagen13.jpg";
import imagen14 from "../assets/carousel/Imagen14.jpg";
import imagen15 from "../assets/carousel/Imagen15.jpg";
import imagen16 from "../assets/carousel/Imagen16.jpg";
import imagen17 from "../assets/carousel/Imagen17.jpg";
import imagen18 from "../assets/carousel/Imagen18.jpg";
import imagen19 from "../assets/carousel/Imagen19.jpg";
import imagen20 from "../assets/carousel/Imagen20.jpg";


export const imagenes = [
  imagen1,
  imagen2,
  imagen3,
  imagen4,
  imagen5,
  imagen6,
  imagen7,
  imagen8,
  imagen9,
  imagen10,
  imagen11,
  imagen12,
  imagen13,
  imagen14,
  imagen15,
  imagen16,
  imagen17,
  imagen18,
  imagen19,
  imagen20,
];

export const Carousel = () => {
  const [imagenAnterior, setImagenAnterior] = useState(imagenes[0]);
  const [imagenActual, setImagenActual] = useState(imagenes[1]);
  const [imagenSiguiente, setImagenSiguiente] = useState(imagenes[2]);

  const cambiarImagen = () => {
    const indiceActual = imagenes.indexOf(imagenActual);
    const siguienteIndice = (indiceActual + 1) % imagenes.length;
    const anterior = siguienteIndice - 1 < 0 ? imagenes.length - 1 : siguienteIndice - 1;
    const siguiente = siguienteIndice + 1 > imagenes.length - 1 ? 0 : siguienteIndice + 1;
    setImagenAnterior(imagenes[anterior]);
    setImagenActual(imagenes[siguienteIndice]);
    setImagenSiguiente(imagenes[siguiente]);
  };

  useEffect(() => {
    const intervalo = setInterval(cambiarImagen, 2000);
    return () => clearInterval(intervalo);
  }, [imagenActual]);

  return (
    <div className="image-container">
      <div className="image-box">
        <img src={imagenAnterior} alt="Cami & Cata" className="image" />
      </div>

      <div className="image-box imagen-actual">
        <img src={imagenActual} alt="Cami & Cata" className="image" />
      </div>

      <div className="image-box">
        <img src={imagenSiguiente} alt="Cami & Cata" className="image" />
      </div>

    </div>
  )
}
