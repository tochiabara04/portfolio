import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element not found. Make sure your HTML file has a div with id='root'.");
}

const root = ReactDOM.createRoot(rootElement as HTMLElement); // Explicitly type the element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure performance in your app
reportWebVitals();
