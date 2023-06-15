import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = (props) => {

    return(
        <div className='nav'>
            <h1>Your Treatment, Your Plan</h1>
            <Link to="/"><button>HOME</button></Link>
            <Link to="/Plan"><button>MY PLAN</button></Link>
            <Link to="/Results"><button>RESULTS</button></Link>
            <Link to="/About"><button>ABOUT</button></Link>
        </div>
    )
}

export default NavBar