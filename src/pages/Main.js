import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Show from '../pages/Show';

const Main = (props) => { 
       
  const [plans, setPlans] = useState(null)
  const URL = 'https://my-plan-backend.herokuapp.com/'
  
  //fetches all plans from our API backend
  const getPlans = async () => {
  const reponse = await fetch(URL)
  const data = await reponse.json()
  setPlans(data.data)
}

const createPlans = async (plans) => {
  //make post request to create plans
  await fetch(URL, {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(plans),
  })
  // update our components list of people
  getPlans()
}

const updatePlans = async (plan, id) => {
  // make post request to create people
  await fetch(URL + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plan),
  });
  // update list of people
  getPlans();
};

const deletePlans = async (id) => {
  // make post request to create people
  await fetch(URL + id, {
      method: "DELETE",
  });
  // update list of people
  getPlans();
};

useEffect(() => {
    getPlans()
}, []);
  return(
      <main>
      <Routes>
          <Route path="/" element={<Index 
              plans={plans} 
              createPlans={createPlans}/>}/>
          <Route path="/plans/:id" element={<Show 
              plans={plans} 
              updatePlans={updatePlans} 
              deletePlans={deletePlans}
          />}/>
      </Routes>
  </main>
)
}

export default Main