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

  const rewind = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime -= 10;
    }
  };

  const forward = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime += 10;
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
          <button onClick={rewind}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon" preserveAspectRatio="xMidYMid meet">
              <path d="M13.59 7.41L9 12l4.59 4.59L15 17l-5-5 5-5zm5 0L14 12l4.59 4.59L20 17l-5-5 5-5z" stroke-width="2" fill="none" stroke="currentColor" />
            </svg>
          </button>

          <button onClick={togglePlay}>
            {isPlaying ?
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon" preserveAspectRatio="xMidYMid meet">
                <path d="M6 19h4V5H6v14zm8 0h4V5h-4v14z" />
              </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon" preserveAspectRatio="xMidYMid meet">
                <path d="M8 5v14l11-7z" />
              </svg>}
          </button>

          <button onClick={forward}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon" preserveAspectRatio="xMidYMid meet">
              <path d="M10.41 7.41L15 12l-4.59 4.59L9 17l5-5-5-5zm-5 0L5.41 8.83 10 12l-4.59 4.59L5 17l5-5-5-5z" stroke-width="2" fill="none" stroke="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

