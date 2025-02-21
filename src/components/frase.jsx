import React from 'react';
import { useUser } from '../context/UserContext';
import '../components/css/frase.css';

export const Frase = () => {
  const { userName } = useUser(); 
  return (
    <div className='container-frase'>
      <div className="box-frase">
        <p>
          Nos complace invitarlos a nuestra boda, donde cada ola será el reflejo de nuestro amor y el atardecer testigo de nuestra promesa
        </p>
        <div className='container-personas-invitadas'>
          <p>Esperamos contar con tu presencia</p>
          {userName.map((name) => {
            return (
              <p key={name} className='nombres-personas-invitadas'>
                {name}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  );
};


