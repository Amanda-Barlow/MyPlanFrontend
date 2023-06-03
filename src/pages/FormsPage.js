import React from 'react';
import GAD7 from '../components/GAD7'
import PHQ9 from '../components/PHQ9'
import FillableForm from '../components/FillableForm'
import SafetyPlan from '../components/SafetyPlan'
import SkillsCheck from '../components/SkillsCheck'

const FormsPage = (props) => {
    return (
        <div>
            <FillableForm />
            <SkillsCheck />  
            <SafetyPlan />
            <PHQ9 />  
            <GAD7 /> 
        </div>
  
    )
}

export default FormsPage;