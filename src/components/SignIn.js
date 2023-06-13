import React from 'react';


const SignIn = (props) => {
    return(
        <div className = 'SignInDiv'>
                <h2>Sign In To Your Account</h2>
                <div className='SignInDiv'>
                    <label>Email: </label>
                    <input placeholder='Enter Email Address' type='text'/>
                    <br></br>
                    <label>Password: </label>
                    <input placeholder='Enter Password' type='text'/>
                    <br></br>
                    <input type= "submit" value="Submit" /> 
               <br></br>
                </div>
            </div>
    );
};

export default SignIn
