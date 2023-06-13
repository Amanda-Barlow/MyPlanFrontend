import React from 'react';
import GAD7 from '../components/GAD7'
import PHQ9 from '../components/PHQ9'
import FillableForm from '../components/FillableForm'
import SafetyPlan from '../components/SafetyPlan'
import SkillsCheck from '../components/SkillsCheck'


const FormsPage = (props) => {

    return (
        <form>
            <form id='myform' action='action.php' method='POST' target='formresponse'></form>
            <FillableForm />
            <SkillsCheck />
            <PHQ9 />  
            <GAD7 /> 
            <SafetyPlan />
            <input type='submit' value='Submit' onclick='return FormsPage();'/>
        </form>

    )
}

export default FormsPage;