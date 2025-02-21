import React, { useState, useEffect } from 'react';
import '../components/css/portada.css';

export const Portada = ({ audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      if (audio) {
        setCurrentTime(audio.currentTime);
      }
    };

    const setAudioDuration = () => {
      if (audio) {
        setDuration(audio.duration);
      }
    };

    if (audio) {
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', setAudioDuration);
    }

    return () => {
      if (audio) {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', setAudioDuration);
      }
    };
  }, [audioRef]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressChange = (event) => {
    const audio = audioRef.current;
    const value = event.target.value;
    if (audio) {
      audio.currentTime = (value / 100) * duration;
    }
  };

  return (
    <div className="container-portada">
      <div className='container-image'>
        <div className="background-image-portada"></div>
        <div className="gradient-overlay-portada"></div>
        <div className="content-bottom-portada">
          <div className="texto-portada letra-peq">
            <span>11-10-2025</span>
          </div>
          <div className="texto-portada">
            <span>Cami</span>&nbsp;&amp;&nbsp;<span>Cata</span>
          </div>
        </div>
      </div>
      <div className='container-audio'>
        <input
          type="range"
          min="0"
          max="100"
          value={duration ? (currentTime / duration) * 100 : 0}
          onChange={handleProgressChange}
          className="progress-bar"
        />

        <div className="audio-controls">
          <button onClick={togglePlay}>
            {isPlaying ?
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" x="0px" y="0px" width="100" height="100" viewBox="0 0 32 32">
                <path d="M 27 3.78125 L 25.8125 4.03125 L 9.8125 7.03125 L 9 7.15625 L 9 20.5625 C 8.40625 20.214844 7.734375 20 7 20 C 4.800781 20 3 21.800781 3 24 C 3 26.199219 4.800781 28 7 28 C 9.199219 28 11 26.199219 11 24 L 11 12.8125 L 25 10.1875 L 25 17.5625 C 24.40625 17.214844 23.734375 17 23 17 C 20.800781 17 19 18.800781 19 21 C 19 23.199219 20.800781 25 23 25 C 25.199219 25 27 23.199219 27 21 Z M 25 6.1875 L 25 8.1875 L 11 10.8125 L 11 8.8125 Z M 23 19 C 24.117188 19 25 19.882813 25 21 C 25 22.117188 24.117188 23 23 23 C 21.882813 23 21 22.117188 21 21 C 21 19.882813 21.882813 19 23 19 Z M 7 22 C 8.117188 22 9 22.882813 9 24 C 9 25.117188 8.117188 26 7 26 C 5.882813 26 5 25.117188 5 24 C 5 22.882813 5.882813 22 7 22 Z"></path>
              </svg>
              : <svg xmlns="http://www.w3.org/2000/svg" className="icon" x="0px" y="0px" width="100" height="100" viewBox="0 0 32 32">
                <path d="M 27 3.78125 L 25.8125 4.03125 L 9.8125 7.03125 L 9 7.15625 L 9 20.5625 C 8.40625 20.214844 7.734375 20 7 20 C 4.800781 20 3 21.800781 3 24 C 3 26.199219 4.800781 28 7 28 C 9.199219 28 11 26.199219 11 24 L 11 12.8125 L 25 10.1875 L 25 17.5625 C 24.40625 17.214844 23.734375 17 23 17 C 20.800781 17 19 18.800781 19 21 C 19 23.199219 20.800781 25 23 25 C 25.199219 25 27 23.199219 27 21 Z M 25 6.1875 L 25 8.1875 L 11 10.8125 L 11 8.8125 Z M 23 19 C 24.117188 19 25 19.882813 25 21 C 25 22.117188 24.117188 23 23 23 C 21.882813 23 21 22.117188 21 21 C 21 19.882813 21.882813 19 23 19 Z M 7 22 C 8.117188 22 9 22.882813 9 24 C 9 25.117188 8.117188 26 7 26 C 5.882813 26 5 25.117188 5 24 C 5 22.882813 5.882813 22 7 22 Z"></path>
                <line x1="29" y1="3" x2="3" y2="29" stroke="white" stroke-width="2" />
              </svg>}
          </button>
        </div>
      </div>
    </div>
  );
};

