import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import { AuthContextProvider } from './context/authContext';
import { PostContextProvider } from './context/postsContext';

<Router></Router>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthContextProvider>
            <PostContextProvider>
                <App />
            </PostContextProvider >
        </AuthContextProvider >
    </React.StrictMode>
);

reportWebVitals();