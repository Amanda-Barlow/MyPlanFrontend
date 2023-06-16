import React, { useState } from "react";
import { Link } from "react-router-dom";


const Index = (props) => {
  // state to hold planData
  const [newForm, setNewForm] = useState({
    email: "",
    password: "",
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
      email: "",
      password: "",
    });
  };

  // loaded function
  const loaded = () => {
    return props.plan.map((plan) => (
      <div key={plan._id} className="plan">
        <Link to={`/plan/${plan._id}`}>
          <h1>{plan.email}</h1>
        </Link>
        <h3>{plan.password}</h3>
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
      
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={newForm.email}
          onChange={handleChange}
          placeholder="Enter Your Email"
        />
        <input
          type="password"
          name="password"
          value={newForm.password}
          onChange={handleChange}
          placeholder="Enter Password"
        />
        <input type="submit" value="Create Plan" />
      </form>

      {props.plan ? loaded() : loading()}
    </section>
  );
};

export default Index;

