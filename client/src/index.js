import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext'; // <-- IMPORT

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* V-- WRAP YOUR APP --V */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);