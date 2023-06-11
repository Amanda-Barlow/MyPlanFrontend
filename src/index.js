import React from 'react';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
<Router></Router>

const root = createRoot(container);
root.render(
    <App />
);

