import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return(
        <div className = 'nav'>
            <h1>Your Treatment - Your Plan!</h1>
            <Link to='/Home'> <button>Home</button></Link>
            <Link to='/FormsPage'><button>Assessments</button></Link>
            <Link to='/About'><button>About Me</button></Link>
            <Link to='/Results'><button>Results</button></Link>
        </div>
    );
};

export default NavBar