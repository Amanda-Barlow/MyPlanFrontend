
// import {useState, useEffect} from "react"
// import {Navigate, useParams} from "react-router-dom"
// import {useNavigate} from "react-router-dom"
// import GAD7 from '../components/GAD7'
// import PHQ9 from '../components/PHQ9'
import FillablePlan from '../components/FillablePlan'
import SafetyPlan from '../components/SafetyPlan'


<div className = 'report'>
<h1>Here are your results</h1>
<h2>Welcome {plan.name}</h2>
<h3>You said you want to work on {plan.goal}</h3>
<h3>The skills you want to learn are: {plan.skills}</h3>
<h3>You said you would like to meet {plan.frequency}</h3>
{/* <h3>Your PHQ9 score is: {PHQ9.PHQ9Score}</h3>
<h3>Your GAD7 score is: {GAD7.GAD7Score}</h3> */}
<h2>Safety Plan</h2>
<h2>Nationwide Crisis Number 988</h2>
<h3>You said you can reach out to {plan.crisis}</h3>
<h3>You said these things help when you are feeling suicidal {plan.coping}</h3>
<h3>You said we should reach out to this person in your care team {plan.provider}</h3>
<h3>If you need help, we should help coordinate care for: {plan.petsKids}</h3>
</div>