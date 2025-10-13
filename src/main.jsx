import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/animate.css/animate.min.css';
import '../node_modules/owl.carousel/dist/assets/owl.carousel.min.css';

import './bootstrap.min.css';
import './style.css'

import App from './App.jsx'

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
