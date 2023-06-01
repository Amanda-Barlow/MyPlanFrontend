import React from 'react';
import Assessment from '../components/Assessment'
import FillableForm from '../components/FillableForm'
import SafetyPlan from '../components/SafetyPlan'
import SkillsCheck from '../components/SkillsCheck'

const FormsPage = (props) => {
    return (
        <div>
            <h2>Let's start making your plan.  Fill out these forms to help us develop a plan.</h2>
            <Assessment />   
            <FillableForm />
            <SafetyPlan />
            <SkillsCheck />     
        </div>
  
    )
}

export default FormsPage;