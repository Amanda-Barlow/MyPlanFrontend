import React from 'react';
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

const Home = (props) => {
    return (
        <div>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Home;
