import React from 'react';
import GAD7 from '../components/GAD7'
import PHQ9 from '../components/PHQ9'
import FillablePlan from '../components/FillablePlan'
import SafetyPlan from '../components/SafetyPlan'
import SkillsCheck from '../components/SkillsCheck'


const PlansPage = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission here, e.g., send form data to the server
    }

    return (
        <form id='myplan' onSubmit={handleSubmit} action='action.php' method='POST' target='formresponse'>

            <form id='myplan' action='action.php' method='POST' target='formresponse'></form>
            <FillablePlan />
            <SkillsCheck />
            <PHQ9 />  
            <GAD7 /> 
            <SafetyPlan />
            <input type='submit' value='Submit' onClick='return PlansPage();'/>
        </form>

    )
}

export default PlansPage;