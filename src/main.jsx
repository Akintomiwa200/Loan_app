import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
// import firebase from './utils/firebase'; // Ensure Firebase is imported and initialized

// Optionally, you can log the initialized Firebase app
// console.log("Firebase initialized:", firebase);

// Render the main app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
