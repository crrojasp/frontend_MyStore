import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import './index.css';
import 'tailwindcss/tailwind.css';
import { AuthProvider } from './AuthContext.jsx';
axios.defaults.baseURL = 'http://localhost:8000';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <div className="app-container" style={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', minHeight: '100vh' }}>
        <App />
      </div>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);