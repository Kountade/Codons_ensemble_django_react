import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // ← Import ajouté

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* ← Enveloppez votre App avec BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);