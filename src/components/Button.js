import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    const { to, label } = props;
    return (
        <button className = 'button'>
            <Link to = {to} className= 'link'>{label}</Link>
        </button>
    )
}
export default Button;