import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar'
import About from './pages/About'
import FormsPage from './pages/FormsPage'
import Home from './pages/Home';
import Results from './pages/Results'

const App = () => {
    const URL = process.env.REACT_APP_BASE_URL
    const [forms, setForms] = useState([]);
    const [form, setForm] = useState(null);
    console.log(URL)

    const fetchForms = async () => {
        try{
            const response = await fetch(URL);
            const data = await response.json();
            setForms(data);
        } catch (error) {
            console.error(error);
        }
    };


useEffect(() => {
    fetchForms();
}, []);

    return (
        <BrowserRouter>
        <div className = 'App'>
        <NavBar url={URL}/>
                <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='About' element={<About />} />
                        <Route path='FormsPage' element={<FormsPage />} />
                        <Route path='Results' element={<Results />} />
                </Routes>
            </div>
        </BrowserRouter>  
    );
}

export default App;