import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import VideoBackground from './pagina-video/VideoBackground';
import { AuthProvider, useAuth } from './context/AuthContext';
import './App.css';
import Invitacion from './components/invitacion';

const App = () => {

  return (
    <AuthProvider>
      <ProtectedRoute />
      {/* <Router>
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
      </Router> */}
    </AuthProvider>
  );
};

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  
  return !isAuthenticated ? <VideoBackground /> : <Invitacion />;
};

export default App;
