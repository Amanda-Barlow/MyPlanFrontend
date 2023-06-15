import './App.css';
import Main from './pages/Main';
import React from 'react'
import NavBar from './components/NavBar'

function App() {
    return (
      <div className="App">
        <NavBar />
        <Main />
      </div>
    );
  }
  
  export default App;