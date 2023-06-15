import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return(
        <nav className = 'nav'>
            <h1>Your Treatment, Your Plan!</h1>
            <Link to='/'><button>Home</button></Link>
            <Link to='/FormsPage'><button>Assessments</button></Link>
            <Link to='/About'><button>About Me</button></Link>
            <Link to='/Show'><button>Results</button></Link>
        </nav>
    );
};

export default NavBar