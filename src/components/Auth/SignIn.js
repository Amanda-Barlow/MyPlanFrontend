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
                    <label>FIRST NAME</label>
                    <input placeholder='Enter Your First Name' type='text'/>
                    <br></br>
                    <label>LAST NAME</label>
                    <input placeholder='Enter Your Last Name' type='text'/>
                    <br></br>
                    <label>EMAIL</label>
                    <input placeholder='Enter Your Email Address' type='text'/>
                    <br></br>
                    <label>PASSWORD</label>
                    <input placeholder='Enter Your Password' type='text'/>
                    <br></br>
                    <button>SUBMIT</button> 
                </div>
            </div>
    );
};

export default SignIn