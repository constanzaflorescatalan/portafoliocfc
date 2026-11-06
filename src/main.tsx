import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Fuentes alojadas en el propio sitio (sin Google Fonts): privacidad y velocidad.
import '@fontsource-variable/urbanist';
import '@fontsource/sacramento/latin-400.css';
import '../design/tokens.css';
import './styles/base.css';
import './styles/nav.css';
import './styles/cover.css';
import './styles/chooser.css';
import './styles/universe.css';
import './styles/chapters.css';
import './styles/case.css';
import './styles/about.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
