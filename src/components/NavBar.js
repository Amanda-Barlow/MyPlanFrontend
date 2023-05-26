import React from 'react'
// import {Link} from 'react-router-dom'


const NavBar = (props) => {
    return(
        <div className = 'nav'>
            <br></br>
            {/* <Link to='/'> */}
                <button>Sign In</button>
            {/* </Link> */}
            {/* <Link to='/assessment'> */}
                <button>PHQ9/GAD7</button>
            {/* </Link> */}
            {/* <Link to='/aboutMe'> */}
                <button>About Me</button>
            {/* </Link> */}
            {/* <Link to='/safetyPlan'> */}
                <button>Safety Plan</button>
            {/* </Link> */}
            {/* <Link to='/skillsCheck'> */}
                <button>Skills Checklist</button>
            {/* </Link> */}
                        <h1>Your Treatment - Your Plan!</h1>
        </div>

    )
}

export default NavBar