import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import FillablePlan from '../components/FillablePlan'   

import GAD7 from '../components/GAD7'
import PHQ9 from '../components/PHQ9'
import SafetyPlan from '../components/SafetyPlan'
import SkillsCheck from '../components/SkillsCheck'

function Index(props) {
    // state to hold planData
    const [newForm, setNewForm] = useState({
        name: "",
        title: "",
      });
    
      // handleChange function for form
    function handleChange(event){
        setNewForm({...newForm, [event.target.name]: event.target.value})
        return newForm;
    }
    
      // handle submit function for form
      const handleSubmit = (event) => {
        event.preventDefault();
        props.createPlans(newForm);
        setNewForm({
          name: "",
          title: "",
        });
      };
    
      // loaded function
      const loaded = () => {
        return props.plans.map((plan) => (
          <div key={plan._id} className="plan">
            <Link to={`/plans/${plan._id}`}>
              <h1>{plan.name}</h1>
            </Link>
            <h3>{plan.title}</h3>
          </div>
        ));
      };
    
      const loading = () => {
        return <h1>Loading...</h1>;
      };
      return (
        <section>
          <form onSubmit={handleSubmit}>
                <FillablePlan />
                <SkillsCheck />
                <PHQ9 />  
                <GAD7 /> 
                <SafetyPlan />
            <input type="submit" value="Create Plan" />
          </form> </section>
      );
    }
    
    export default Index;

