import {useParams, useNavigate} from "react-router-dom"
import { useState } from "react";

const Show = (props) => {
  const params = useParams()
  const navigate = useNavigate()
  const id = params.id;
  const plans = props.plans;
  const plan = plans.find((p) => p._id === id);

// state for form
const [editForm, setEditForm] = useState(plan);

// handleChange function for form
const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
};

// handlesubmit for form
const handleSubmit = (event) => {
    event.preventDefault();
    props.updatePlans(editForm, plan._id);
    navigate("/");
};
const removePlan = (e) => {
    e.preventDefault()
    props.deletePlans(plans._id);
    navigate("/");
  };
        return(
            <div className = 'plan'>
                <h1>Here are your results</h1>
                <h2>Welcome {plan.name}</h2>
                <h2>{plan.title}</h2>
                <h3>You said you want to work on {plan.goal}</h3>
                <h3>The skills you want to learn are: {plan.skills}</h3>
                <h3>You said you would like to meet {plan.frequency}</h3>
                {/* <h3>Your PHQ9 score is: {plan.PHQ9Score}</h3>
                <h3>Your GAD7 score is: {plan.GAD7Score}</h3> */}
                <h2>Safety Plan</h2>
                <h2>Nationwide Crisis Number 988</h2>
                <h3>You said you can reach out to {plan.crisis}</h3>
                <h3>You said these things help when you are feeling suicidal {plan.coping}</h3>
                <h3>You said we should reach out to this person/people in your care team {plan.provider} {plan.contacts}</h3>
                <h3>If you need help, we should help coordinate care for: {plan.petsKids}</h3>
                
                <button id="delete" onClick={removePlan}>DELETE</button>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={editForm.name}
                name="name"
                placeholder="name"
                onChange={handleChange}
            />
            <input
                type="text"
                value={editForm.goal}
                name="goal"
                placeholder="goal"
                onChange={handleChange}
            />
            <input
                type="text"
                value={editForm.skills}
                name="skills"
                placeholder="skills"
                onChange={handleChange}
            />
            <input
                type="text"
                value={editForm.frequency}
                name="frequency"
                placeholder="frequency"
                onChange={handleChange}
              />
              <input
                type="text"
                value={editForm.crisis}
                name="crisis"
                placeholder="crisis"
                onChange={handleChange}
              />
              <input
                type="text"
                value={editForm.coping}
                name="coping"
                placeholder="coping"
                onChange={handleChange}
              />
              <input
                type="text"
                value={editForm.provider}
                name="provider"
                placeholder="provider"
                onChange={handleChange}
              />
              <input
                type="text"
                value={editForm.petsKids}
                name="petsKids"
                placeholder="pets or kids?"
                onChange={handleChange}
              />
            <input type="submit" value="Update Plan" />
          </form>
        </div>
        );
    }

export default Show;