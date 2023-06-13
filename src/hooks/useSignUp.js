import { useState } from 'react'
import { useAuthContext } from './useAuthContext'


export const useSignUp= () => { 
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useAuthContext()
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const SignUp = async (email, password) => {
    setIsLoading(true)
    setError(null)

    const response = await axios.post('https://git.heroku.com/my-plan-backend.git/user/SignUp',
      
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