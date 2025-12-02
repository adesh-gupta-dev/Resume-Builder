import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.js';
import ResumeForm3D from './components/FORMS/ResumeForm3D.jsx';
import Templates from './components/UI/Templates.jsx';
import About from './components/UI/About.jsx';
import LoginForm from './components/FORMS/LoginForm.jsx';
import SignupForm from './components/FORMS/SignupForm.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/create-resume"
            element={(
              <PrivateRoute>
                <ResumeForm3D />
              </PrivateRoute>
            )}
          />
          <Route path="/templates" element={<Templates />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/contact" element={<App />} />
          <Route path="/privacy-policy" element={<App />} />
          <Route path="/terms-of-service" element={<App />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
