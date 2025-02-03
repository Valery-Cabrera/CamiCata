import React from 'react';
import cancionSrc from "../assets/musica.mp3";

export const AudioPlayer = React.forwardRef((_, ref) => {
  return (
    <audio ref={ref} loop>
      <source src={cancionSrc} type="audio/mp3" />
      Tu navegador no soporta el elemento de audio.
    </audio>
  );
});


