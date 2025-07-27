
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.jsx'
import './app.css';
import { ThemeProvider } from './assets/context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  </BrowserRouter>
  ,
)
