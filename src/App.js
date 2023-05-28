import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
// import { useState, useEffect } from 'react';
import NavBar from './components/NavBar'
import About from './pages/About'
import FormsPage from './pages/FormsPage'
import Home from './pages/Home';
import Results from './pages/Results'

const App = () => {
    return (
        <div className = 'App'>
            <BrowserRouter>
                <Routes>
                    <Route element={<NavBar />}>
                        <Route path='/' element={<Home />} />
                        <Route path='About' element={<About />} />
                        <Route path='FormsPage' element={<FormsPage />} />
                        <Route path='Results' element={<Results />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;