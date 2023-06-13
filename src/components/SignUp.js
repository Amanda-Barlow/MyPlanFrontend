import React from 'react';

const SignUp = (props) => {
    return(
        <div className = 'SignUpDiv'>
                <h2>Sign Up For An Account</h2>
                <div className='SignUpDiv'>
                    <label>Add Your Email: </label>
                    <input placeholder='Add Your Email' type='text'/>
                    <br></br>
                    <label>Create A Password: </label>
                    <input placeholder='Create A Password' type='text'/>
                    <br></br>
                    <label>Repeat Your Password: </label>
                    <input placeholder='Repeat Your Password' type='text'/>
                    <br></br>
                    <input type= "submit" value="Submit" /> 
                <br></br>
                </div>
            </div>
    );
};


export default SignUp