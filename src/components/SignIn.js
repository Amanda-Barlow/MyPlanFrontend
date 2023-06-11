import React from 'react';

const SignIn = (props) => {
    return(
        <div className = {SignIn.loginContainer}>
                <h2>Sign In To Your Account</h2>
                
                <div className={SignIn.loginContainer}>
                    <label>Email: </label>
                    <input placeholder='Enter Your Email Address' type='text'/>
                    <br></br>
                    <label>Password: </label>
                    <input placeholder='Enter Your Password' type='text'/>
                    <br></br>
                    <input type= "submit" value="Submit" /> 
                </div>
            </div>
    );
};

export default SignIn