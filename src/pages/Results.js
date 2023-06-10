import React from 'react';
// import {useState, useEffect} from "react"
// import {Navigate, useParams} from "react-router-dom"
// import {useNavigate} from "react-router-dom"
import GAD7 from '../components/GAD7'
import PHQ9 from '../components/PHQ9'
import FillableForm from '../components/FillableForm'
import SafetyPlan from '../components/SafetyPlan'


    //function to return loaded JSX
const Results = ({}) => { 
        return(
            <div className = 'report'>
                <h1>Here are your results</h1>
                <h2>Welcome {FillableForm.name}</h2>
                <h3>You said you want to work on {FillableForm.goal}</h3>
                <h3>The skills you want to learn are: {FillableForm.skills}</h3>
                <h3>You said you would like to meet {FillableForm.frequency}</h3>
                <h3>Your PHQ9 score is: {PHQ9.PHQ9Score}</h3>
                <h3>Your GAD7 score is: {GAD7.GAD7Score}</h3>
                <h2>Safety Plan</h2>
                <h2>Nationwide Crisis Number 988</h2>
                <h3>You said you can reach out to {SafetyPlan.crisis}</h3>
                <h3>You said these things help when you are feeling suicidal {SafetyPlan.coping}</h3>
                <h3>You said we should reach out to this person in your care team {SafetyPlan.provider}</h3>
                <h3>If you need help, we should help coordinate care for: {SafetyPlan.petsKids}</h3>
            </div>
        );
    }


export default Results;
