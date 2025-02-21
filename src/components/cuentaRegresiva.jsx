import React, { useState, useEffect } from 'react';
import '../components/css/cuentaRegresiva.css';

export const CuentaRegresiva = ({ fecha }) => {
  const calcularTiempoRestante = () => {
    const hoy = new Date();
    const tiempoQueda = fecha - hoy;

    let tiempoRestante = {};
    if (tiempoQueda > 0) {
        tiempoRestante = {
        dias: Math.floor(tiempoQueda / (1000 * 60 * 60 * 24)),
        horas: Math.floor((tiempoQueda % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutos: Math.floor((tiempoQueda % (1000 * 60 * 60)) / (1000 * 60)),
        segundos: Math.floor((tiempoQueda % (1000 * 60)) / 1000),
      };
    }
    return tiempoRestante;
  };

  const [tiempoRestante, setTiempoRestante] = useState(calcularTiempoRestante());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTiempoRestante(calcularTiempoRestante());
    }, 1000);

    return () => clearInterval(timerId);
  }, [calcularTiempoRestante]);

  return (
      <div className='container-cuenta-regresiva'>
        {tiempoRestante.dias !== undefined ? (
          <div className='container-tiempo-restante'>
            <div className='contenedor-quedan'>
              <p className='numero-cuenta-regresiva'>{tiempoRestante.dias}</p>
              <p className='texto-cuenta-regresiva'>Días</p>
            </div>
            <div className='contenedor-quedan'>
              <p className='numero-cuenta-regresiva'>{tiempoRestante.horas}</p>
              <p className='texto-cuenta-regresiva'>Horas</p>
            </div>
            <div className='contenedor-quedan'>
              <p className='numero-cuenta-regresiva'>{tiempoRestante.minutos}</p>
              <p>Minutos</p>
            </div>
            <div className='contenedor-quedan'>
              <p className='numero-cuenta-regresiva'>{tiempoRestante.segundos}</p>
              <p className='texto-cuenta-regresiva'>Segundos</p>
            </div>
          </div>
        ) : (
          <h2>¡Llegó la hora!</h2>
        )}
      </div>
  );
};

