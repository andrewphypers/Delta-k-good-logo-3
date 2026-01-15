import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/app/App';
import '@/styles/index.css';

console.log('Delta K - Build loaded successfully - v1.3 - CLEAN');

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
  
