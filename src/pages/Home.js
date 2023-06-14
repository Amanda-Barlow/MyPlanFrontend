import React from 'react';
// import Login from '../components/Login'
// import GAD7 from '../components/GAD7'
// import PHQ9 from '../components/PHQ9'
import FillableForm from '../components/FillableForm'
// import SafetyPlan from '../components/SafetyPlan'
// import SkillsCheck from '../components/SkillsCheck'
// import SignUp from '../components/SignUp'
// import { useSignOut } from 'react-auth-kit'

const Home = () => {
    return (
        <div className='HomePage'>
            <h1>Your Treatment, Your Plan</h1>
            <h2>Welcome to our page, we are here to help you own your voice in your treatment.  To get started, choose an option below:</h2>
            <form id='myform' action='action.php' method='POST' target='formresponse'></form>
            <FillableForm />
            {/* <SkillsCheck /> */}
            {/* <PHQ9 />  
            <GAD7 />  */}
            {/* <SafetyPlan /> */}
            <input type='submit' value='Submit' onClick='return FormsPage();'/>
        </div>
    )
}

export default Home;
