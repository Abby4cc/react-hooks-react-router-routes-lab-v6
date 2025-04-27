import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';
import App from './App'; // Assuming you have an App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}>
      <App /> {/* Render your main App component here */}
    </RouterProvider>
  </React.StrictMode>
);