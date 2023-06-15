import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Show from '../pages/Show';


const Main = (props) => { 
       
  const [plan, setPlan] = useState(null)
  const URL = 'http://localhost:4000/plan/'
  
  //fetches all plans from our API backend
  const getPlan = async () => {
  const response = await fetch(URL)
  const data = await response.json()
  setPlan(data.data)
}

const createPlan = async (plan) => {
  //make post request to create plans
  await fetch(URL, {
      method: "post",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(plan),
  })
  // update our components list of plans
  getPlan();
}

const updatePlan = async (plan, id) => {
  // make post request to create people
  await fetch(URL + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plan),
  });
  // update list of people
  getPlan();
};

const deletePlan = async (id) => {
  // make post request to create people
  await fetch(URL + id, {
      method: "DELETE",
  });
  // update list of people
  getPlan();
};

useEffect(() => {
    getPlan()
}, []);
  return(
      <main>
      <Routes>
          <Route path="/" element={<Index plan={plan} createPlan={createPlan}/>}/>
          <Route path="/plan/:id" element={<Show plan={plan} updatePlan={updatePlan} deletePlan={deletePlan}/>}/>
      </Routes>
  </main>
)
}

export default Main