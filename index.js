import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pagina1 from './pagina1/pagina1';
import App from './App';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Pagina1></Pagina1>
    <App />

  </React.StrictMode>
);


reportWebVitals();
