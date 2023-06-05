import React from 'react';
import GAD7 from '../components/GAD7'
import PHQ9 from '../components/PHQ9'
import FillableForm from '../components/FillableForm'
import SafetyPlan from '../components/SafetyPlan'


const FormsPage = (props) => {
    return (
        <div>
            <FillableForm />
            <PHQ9 />  
            <GAD7 /> 
            <SafetyPlan />
            <input type="Submit" value="Submit" />
        </div>
  
    )
}

export default FormsPage;