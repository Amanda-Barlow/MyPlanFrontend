
import NavBar from './components/NavBar';
import About from './pages/About';
import FormsPage from './pages/FormsPage';
import Home from './pages/Home';
import Results from './pages/Results';
import './App.css';
import { RequireAuth } from 'react-auth-kit';

import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';


const App = () => {
    const URL = process.env.REACT_APP_BASE_URL
    const [forms, setForms] = useState([]);
    const [form, setForm] = useState(null);
    console.log(URL, form, forms, setForm,)
    
    const fetchForms = async () => {
        try{
            const response = await fetch(URL);
            const data = await response.json();
            setForms(data.data);
        } catch (error) {
            console.log(error);
        }
    };

useEffect(() => {
    setForms();
}, []);

    return (
        
        <div className = 'App'>
                <NavBar url={URL}/>
                    <Routes>
                        <Route path='/' element={<RequireAuth loginPath='/login'>
                            <Home />
                            </RequireAuth>} />
                        <Route path='About' element={<About />} />
                        <Route path='FormsPage' element={<FormsPage />} />
                        <Route path='Results' element={<Results />} />
                    </Routes>
        </div>
         
    );
}

export default App;
