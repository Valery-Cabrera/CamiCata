import React from 'react';
import '../components/css/lugar.css';

export const Lugar = () => {
    return (
        <div className='container-lugar'>
            <p className='texto-lugar'>Casa Konna</p>
            <p className='texto-lugar'>Santa Marta, Colombia</p>
            <p className='texto-lugar'>5:00 PM</p>
            <button onClick={() => {
                window.open('https://maps.app.goo.gl/9KkkEf3S4hF9vxsbA', '_blank');
            }}>
                ¿Cómo llegar?
            </button>
        </div>
    );
};


