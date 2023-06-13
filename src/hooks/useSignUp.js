import React, { useState } from 'react';
// import { useFormik } from 'formik';
import { useSignUp } from 'react-auth-kit';
import axios from 'axios'

export const useSignUp= () => { 
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useAuthContext()
  
  const BASE_URL= ('https://my-plan-backend.herokuapp.com/');
  const SignUp = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await axios.post('https://my-plan-backend.herokuapp.com/',
      
      {headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password }) 
    })
    
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      localStorage.setItem('user', JSON.stringify(json))
      dispatch({type: 'SignIn', payload: json})
      setIsLoading(false)
    }
  }

  return { register, isLoading, error }
}

export default useSignUp;