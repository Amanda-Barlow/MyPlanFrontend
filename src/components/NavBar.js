import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return(
        <div>
            <h1>Your Treatment, Your Plan!</h1>
            <Link to='/'><button>Home</button></Link>
            <Link to='/Main'><button>Plans</button></Link>
            <Link to='/About'><button>About Me</button></Link>
            <Link to='/Show'><button>Results</button></Link>
        </div>
    );
};

export default NavBar