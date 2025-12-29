import { BrowserRouter, Routes, Route } from 'react-router-dom';

//route.jsx
import { createRoot } from 'react-dom/client';
import App from '../App.js'; // Adjusted path to App.js (assuming App.js is in src/)
import Form from '../../components/FORMS/ResumeForm3D.jsx'; // Adjusted path to form.jsx (assuming components is in src/)

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
    <BrowserRouter>

        <Routes>
            
            <Route path="/" element={<App />} />
            <Route path="/create-resume" element={<ResumeForm3D/>} />
            <Route path="/templates" element={<App />} />
            <Route path="/contact" element={<App />} />
            <Route path="/privacy-policy" element={<App />} />
            <Route path="/terms-of-service" element={<App />} />
        </Routes>       
    </BrowserRouter>
);  
export default root;

// This will render the App component at the root path and other paths as specified.
// Ensure that your App component handles the routing logic for different sections of your application.

