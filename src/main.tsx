import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './translations';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer pauseOnFocusLoss={false} theme="dark" transition={Zoom} autoClose={1500} position="top-right" />
    <App />
  </React.StrictMode>,
);
