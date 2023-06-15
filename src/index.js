import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App.js'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';
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

