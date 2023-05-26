import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar'
// import About from './pages/About'
// import FormsPage from './pages/FormsPage'
// import Home from './pages/Home';
// import Results from './pages/Results'

// import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    const URL = process.env.REACT_APP_BASE_URL
    const [forms, setForms] = useState({});
    const [form, setForm]=useState(null)
    console.log(URL)

        const fetchForms = async () => {
            try {
                const response = await fetch (URL);
                const data = await response.json();
                setForms(data);
            } catch(error) {
                console.error(error);
            }
        };
    useEffect(() => {
        fetchForms();
    }, []);
        
        return(
            <div className ="App">
                <NavBar url={URL}/>
            </div>
        )
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

export default App;