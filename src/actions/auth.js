import {AUTH} from '../const/actionTypes'
import * as api from '../api/index.js'

export const loadUser = () => async (dispatch)=>{
    const localUser = JSON.parse(localStorage.getItem('user_info'))

    if(localUser){
        dispatch({type: AUTH, data: localUser})
    }
}

export const signin = (formData, router) => async (dispatch) =>{
    try{
        const { data } = await api.signIn(formData)

        dispatch({ type: AUTH, data });

        router.push('/');
       
    } catch(error) {
        console.log(error);
    }
};

export const signup = (formData, router) => async (dispatch) => {
    try{
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        router.push('/');

    }catch(error){
        console.log(error);
    }
}

export const signupGoogle = (accessToken, router) => async (dispatch) => {
    try{
        const { data } = await api.signupGoogle(accessToken);

        dispatch({ type: AUTH, data });
        router.push('/');

    }catch(error){
        console.log(error);
    }
}