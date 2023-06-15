import { useState } from "react";
import {Link} from "react-router-dom"
import FillableForm from '../components/FillableForm'


const Index = (props) => {

  const loaded = () => {
    return props.forms.map((form) => (
      <div key={form._id} className="form">
        <Link to={`/forms/${form._id}`}><h1>Welcome {form.name} !</h1></Link>
        <h2>{form.title}</h2>
       </div>
      ))
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (props.forms ? loaded() : loading());
}

export default Index
