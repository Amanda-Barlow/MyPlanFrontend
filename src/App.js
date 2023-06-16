
import React from 'react'
import './App.css';
import NavBar from './components/NavBar'
import Login from './components/Login'
import { AuthProvider } from 'react-auth-kit';

function App() {
    return (
      <AuthProvider>
      <div className="App">
        <NavBar />
        <Login />
      </div>
      </AuthProvider>
    );
  }
  
  export default App;