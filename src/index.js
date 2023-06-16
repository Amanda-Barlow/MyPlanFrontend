import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import './App.css';
import App from './App.js'
// import NavBar from './components/NavBar'

import reportWebVitals from './reportWebVitals';
// import { AuthProvider } from 'react-auth-kit'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
    <React.StrictMode>
        <App /> 
        
    </React.StrictMode>
    </Router>  
);

reportWebVitals();

