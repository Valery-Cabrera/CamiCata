import React from 'react';
import '../components/css/calendario.css';

export const Calendario = () => {

  const generateDays = () => {
    const days = [];

    for (let i = 0; i < 2; i++) {
      days.push(null);
    }

    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }

    return days;
  };

  const weekdays = ['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB', 'DOM'];

  return (
    <div className="container-calendar">
      <h2>Octubre 2025</h2>
      <div className="calendario-grid">
        <div className="calendario-header">
          {weekdays.map((day, index) => (
            <p key={index} className="calendario-dia-header">
              {day}
            </p>
          ))}
        </div>

        {generateDays().map((date, index) => (
          <div
            key={index}
            className="calendario-dia"
          >
            <p className={(date === 11) ? 'selected' : ''}>
              {date ? date : ''}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
