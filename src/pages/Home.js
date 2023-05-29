import React from 'react';
import SignIn from '../components/SignIn'
import UserAuth from '../components/UserAuth'
import NavBar from '../components/NavBar'

const Home = (props) => {
    return (
        <div>
            <h2>Let's Work Together to Make Your Plan</h2>
            <SignIn />
            <UserAuth />
        </div>
    )
}

export default Home;
