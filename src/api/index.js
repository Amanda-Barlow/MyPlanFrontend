import axios from 'axios'

const API = axios.create('https://git.heroku.com/my-plan-backend.git')

API.interceptors.request.use((req)=>{
    if (localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem 
            ('profile').token)}`
    }

return req;
});

export const signIn = (formData) => API.post('/user/signin', formData);
export const signInGoogle = (accessToken) => API.post('/user/signin', {
    googleAccessToken: accessToken
});

export const SignUp = (formData) => API.post('/user/signup', formData);
export const signUpGoogle = (accessToken) => API.post('/user/signup', {
googleAccessToken: accessToken
})