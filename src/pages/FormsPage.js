import React from 'react';
import Assessment from '../components/Assessment'
import FillableForm from '../components/FillableForm'
import SafetyPlan from '../components/SafetyPlan'
import SkillsCheck from '../components/SkillsCheck'

const FormsPage = (props) => {
    return (
        <div>
            <Assessment />   
            <FillableForm />
            <SafetyPlan />
            <SkillsCheck />     
        </div>
  
    )
}

export default FormsPage;