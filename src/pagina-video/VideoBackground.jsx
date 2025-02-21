import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './VideoBackground.css';
import videoSrc from "../assets/videoInicio.mp4"
import { AudioPlayer } from '../components/audioPlayer';
import { useUser } from '../context/UserContext';
import invitados from "../datos/lista-invitados.json"

const mensaje = "Verifica tu código."

const VideoBackground = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { setUserName } = useUser();

  const audioRef = useRef(null);

  const [valor, setValor] = useState('');
  const [nombre, setNombre] = useState('');

  const handleChange = (event) => {
    setValor(event.target.value);
  };

  const comprobarPersona = () => {
    const nombreEncontrado = invitados[valor];

    if (nombreEncontrado) {
      setNombre(nombreEncontrado);
      setUserName(nombreEncontrado);
      login();

      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error('Error al reproducir el audio:', error);
        });
      }

      setTimeout(() => {
        navigate('/invitacion');
      }, 100);

    } else {
      setNombre(mensaje);
    }
  };

  return (
    <div className="video-background-container">
      <video autoPlay muted loop className="video-background">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="video-background-content">
        <h1 className='titulo-video'>CAMI <span className='y-video'> &</span> CATA</h1>
        <p className='fecha-video'>11/10/25</p>

        <input type="text" id="name" className="input-container" onChange={handleChange} value={valor} placeholder="Ingresa tu código" required />

        <AudioPlayer ref={audioRef} />

        <button onClick={comprobarPersona} className='comprobar-video' >Comprobar</button>

        {nombre === mensaje && <p className='mensaje'>{nombre}</p>}
      </div>
    </div>
  );
};

export default VideoBackground;
