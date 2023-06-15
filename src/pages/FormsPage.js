import React from 'react';
import GAD7 from '../components/GAD7'
import PHQ9 from '../components/PHQ9'
import FillableForm from '../components/FillableForm'
import SafetyPlan from '../components/SafetyPlan'
import SkillsCheck from '../components/SkillsCheck'
// import SafetyPlan from '../components/SafetyPlan'
// import SkillsCheck from '../components/SkillsCheck'
// import SignUp from '../components/SignUp'
// import { useSignOut } from 'react-auth-kit'
// import Login from '../components/Login'
// import GAD7 from '../components/GAD7'
// import PHQ9 from '../components/PHQ9'


const FormsPage = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission here, e.g., send form data to the server
    }

    return (
        <form id='myform' onSubmit={handleSubmit} action='action.php' method='POST' target='formresponse'>

            <form id='myform' action='action.php' method='POST' target='formresponse'></form>
            <FillableForm />
            <SkillsCheck />
            <PHQ9 />  
            <GAD7 /> 
            <SafetyPlan />
            <input type='submit' value='Submit' onClick='return FormsPage();'/>
        </form>

    )
}

export default FormsPage;