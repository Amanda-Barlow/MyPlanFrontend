import {Auth} from '../const/actionsTypes'
import * as api from '../../api/index'

export const loadUser = () => async (dispatch)=>{
    const localUser = JSON.parse(localStorage.getItem('user_info'))

    if(localUser){
        dispatch({type: Auth, data: localUser})
    }
}

export const signin = (data2, navigate) => async (dispatch) =>{
    try{
        const {data} = await api.signIn(data2)

        dispatch({type: Auth, data})
        navigate('/')
    }catch(err){
        console.log(err);
    }
}

export const signup = (formData, navigate) => async (dispatch) =>{
    try{
        const {data} = await api.signUp(formData)

        dispatch({type: Auth, data})
        navigate('/')
    }catch(err){
        console.log(err);
    }
}

export const signupGoogle = (accessToken, navigate) => async (dispatch) =>{
    try{
        const {data} = await api.signupGoogle(accessToken)

        dispatch({type: Auth, data})
        navigate('/')
    }catch(err){
        console.log(err);
    }
}