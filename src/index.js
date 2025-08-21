import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.js';
import ResumeForm3D from './components/FORMS/ResumeForm3D.jsx';
import Templates from './components/UI/Templates.jsx';
import About from './components/UI/About.jsx';
import reportWebVitals from './reportWebVitals.js';
// import html2pdf from 'html2pdf.js/dist/html2pdf.min.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create-resume" element={<ResumeForm3D />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<App />} />
        <Route path="/privacy-policy" element={<App />} />
        <Route path="/terms-of-service" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
