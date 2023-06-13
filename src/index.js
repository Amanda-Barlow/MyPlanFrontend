import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom';
import { AuthProvider } from 'react-auth-kit'


<Router></Router>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
    <BrowserRouter>
                <Home />
    </BrowserRouter>
    </AuthProvider >
);

reportWebVitals();