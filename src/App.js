import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import VideoBackground from './pagina-video/VideoBackground';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AudioPlayer } from './components/audioPlayer';
import './App.css'
import Invitacion from './components/invitacion';

const App = () => {
  return (
    <AuthProvider>
      <Router basename="/CamiCata">
        <AudioPlayer />
        <Routes>
          <Route path="/" element={<VideoBackground />} />
          <Route
            path="/invitacion"
            element={
              <ProtectedRoute element={<Invitacion />} />
            }
          />
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
