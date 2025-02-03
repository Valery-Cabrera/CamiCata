import React from 'react';
import '../components/css/lugar.css';

export const Lugar = () => {
    return (
        <div className='container-lugar'>
            <p>Casa Konna</p>
            <p>Santa Marta, Colombia</p>
            <p>4:30 PM</p>
            <button onClick={() => {
                window.location.href = 'https://maps.app.goo.gl/9KkkEf3S4hF9vxsbA';
            }}>
                ¿Cómo llegar?
            </button>
        </div>
    );
};


