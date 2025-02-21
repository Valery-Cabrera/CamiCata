import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import VideoBackground from './pagina-video/VideoBackground';
import { AuthProvider, useAuth } from './context/AuthContext';
import './App.css';
import Invitacion from './components/invitacion';

const App = () => {

  useEffect(() => {
    const detectDarkMode = () => {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    };

    detectDarkMode();

    const darkModeListener = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeListener.addEventListener('change', detectDarkMode); 

    return () => {
      darkModeListener.removeEventListener('change', detectDarkMode);
    };
  }, []);


  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<VideoBackground />} />
          <Route
            path="/invitacion"
            element={
              <ProtectedRoute element={<Invitacion />} />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />}  />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? element : <Navigate to="/" />;
};

export default App;
