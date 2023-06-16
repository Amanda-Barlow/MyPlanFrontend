import React, { useState } from "react";
import { Link } from "react-router-dom";
import Plan from '../pages/Plan';

const Index = (props) => {
  // state to hold planData
  const [newForm, setNewForm] = useState({
    name: "",
    title: "",
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createPlan(newForm);
    setNewForm({
      name: "",
      title: "",
    });
  };

  // loaded function
  const loaded = () => {
    return props.plan.map((plan) => (
      <div key={plan._id} className="plan">
        <Link to={`/plan/${plan._id}`}>
          <h1>{plan.name}</h1>
        </Link>
        <h3>{plan.title}</h3>
      </div>
    ));
  };

  // data isn't loaded
  const loading = () => {
    console.log("in loading");
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <Plan/>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newForm.name}
          onChange={handleChange}
          placeholder="Enter Name"
        />
        <input
          type="text"
          name="title"
          value={newForm.title}
          onChange={handleChange}
          placeholder="Enter Title"
        />
        <input type="submit" value="Create Plan" />
      </form>

      {props.plan ? loaded() : loading()}
    </section>
  );
};

export default Index;

