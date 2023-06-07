import React from 'react';

// import {useGoogleLogin} from '@react-oauth/google';
// import {useDispatch} from 'react-redux';
// import {signup, signupGoogle} from '../actions/auth';

const InitState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
}
const SignIn = (props) => {
    return(
        <div className = {SignIn.loginContainer}>
                <h2>Sign In To Your Account</h2>
                
                <div className={SignIn.inputContainer}>
                    <label>Name:  </label>
                    <input placeholder='Enter Your Name' type='string'/>
                    <br></br>
                    <label>Email: </label>
                    <input placeholder='Enter Your Email Address' type='string'/>
                    <br></br>
                    <label>Password: </label>
                    <input placeholder='Enter Your Password' type='string'/>
                    <br></br>
                    <button>Submit</button> 
                </div>
            </div>
    );
};

export default SignIn