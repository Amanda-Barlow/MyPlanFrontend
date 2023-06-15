import { useState } from "react";
import { Link } from "react-router-dom";
import FillablePlan from '../components/FillablePlan'   

const Index=(props)=> {
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
        return props.plan.map((plan) => (
          <div key={plan._id} className="plan">
            <Link to={`/plan/${plan._id}`}>
              <h1>{plan.name}</h1>
            </Link>
            <h3>{plan.title}</h3>
          </div>
        ));
      };
    
    // data isnt loaded
    const loading = () => {
      console.log("in loading")
      return <h1>Loading...</h1>
  }

      return (
        <section>
          <FillablePlan />
          <input type="submit" value="Create Person" />
       
        {props.people ? loaded() : loading()}
      </section>
      );
    }
    
    export default Index;

