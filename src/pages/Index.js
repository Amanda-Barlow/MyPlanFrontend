import { useState } from "react";
import {Link} from "react-router-dom"
import React from 'react';
import FillableForm from '../components/FillableForm'


const Index = (props) => {
  const loaded = () => {
    return props.forms.map((forms) => (
      <div key={forms._id} className="forms">
        <Link to={`/forms/${forms._id}`}><h1>Welcome {forms.name} !</h1></Link>
        <h2>{forms.title}</h2>
        <form id='myform' action='action.php' method='POST' target='formresponse'></form>
            <FillableForm />
            <SkillsCheck />
            <PHQ9 /> 
            <GAD7 />
            <SafetyPlan />
            <input type='submit' value='Submit' onClick='return FormsPage();'/>
        </div>
      ))
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (props.forms ? loaded() : loading());
}

export default Index

