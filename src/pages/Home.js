import React from 'react';
import Login from '../components/Login'

// import SignUp from '../components/SignUp'
import { useSignOut } from 'react-auth-kit'

const Home = () => {
    const signOut = useSignOut();
    return (
        <div className='HomePage'>
            <h1>Your Treatment, Your Plan</h1>
            <h2>Welcome to our page, we are here to help you own your voice in your treatment.  To get started, choose an option below:</h2>
            <Login />
        </div>
    )
}

export default Home;
