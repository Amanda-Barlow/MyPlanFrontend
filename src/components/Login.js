import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useSignIn } from 'react-auth-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const signIn = useSignIn();
  const BASE_URL = "http://localhost:4000/plan";
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values) => {
      console.log('Values: ', values);
      setError('');
      try {
        const response = await axios.post(BASE_URL, values);
        signIn({
          token: response.data.token,
          expiresIn: 3600,
          tokenType: 'Bearer',
          authState: { email: values.email }
        });
      } catch (err) {
        if (err.response && err.response.data) {
          setError(err.response.data.message);
        }
        console.log('Error:');
        navigate('../components/Register');
      }
    }
  });

  return (
    
      <div className='SignInDiv'>
        <h2>Sign In To Your Account</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className='SignInDiv'>
            <label>Email: </label>
            <input
              placeholder='Enter Email Address'
              type='text'
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange} />
            <br></br>
            <label>Password: </label>
            <input
              placeholder='Enter Password'
              type='password'
              name='password'
              value={formik.values.password}
              onChange={formik.handleChange} />
            <br></br>
            <button size='large' kind='primary' type='submit' disabled={formik.isSubmitting}>Sign In</button>
            <br></br>
            <button size='large' kind='primary' type='submit' disabled={formik.isSubmitting}>Register</button>
          </div>
        </form>
      </div>
    
  )
};

export default Login;
