import React, { useRef, useEffect } from 'react';
import cancionSrc from "../assets/musica.mp3";
import { Lugar } from './lugar';
import { Portada } from './portada';
import { Frase } from './frase';
import { Nombres } from './nombres';
import { Calendario } from './calendario';
import { Cinta } from './cinta';
import { Carousel } from './carousel';
import { Dresscode } from './dresscode';
import { Regalos } from './regalos';
import { Contacto } from './contacto';
import { CuentaRegresiva } from './cuentaRegresiva';
import { Info } from './info';
import { Foto } from './foto';
import '../components/css/invitacion.css';

const Invitacion = () => {
  const fecha = new Date('2025-10-11T17:00:00-05:00'); // Hora de Colombia (UTC-5)

  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error('Error al reproducir el audio:', error);
        });
      }
    };

    playAudio();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);


  return (
    <div className='invitacion'>
      <audio ref={audioRef} loop>
        <source src={cancionSrc} type="audio/mp3" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      <Nombres />
      <Portada audioRef={audioRef} />
      <Frase />
      <Cinta />
      <Calendario />
      <Lugar /> 
      <Dresscode />
      <Cinta />
      <Carousel />
      <Regalos />
      <Contacto />
      <Cinta />
      <CuentaRegresiva fecha={fecha} />
      <Cinta /> 
      <Foto />
      <Info />
      <div className='container-pie-pag'>
        <Nombres />
      </div>
    </div>
  );
};

export default Invitacion;
