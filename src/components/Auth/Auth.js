import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';

import { signIn, signUp } from '../../actions/auth'
import { AUTH } from '../../constants/actionTypes'

const UserAuth = (props) => {
    return(
        <div className = 'userAuth'>
            <h2>UserAuth</h2>
        </div>
    );
};

export default Auth