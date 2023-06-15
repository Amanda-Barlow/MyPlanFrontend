import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import About from './pages/About';
import FormsPage from './pages/FormsPage';
import Show from './pages/Show';

const Main = (props) => {
    const [forms, setForms] = useState([]);

    const URL = process.env.REACT_APP_BASE_URL

    const getForms = async () => {
            const response = await fetch(URL);
            const data = await response.json();
            setForms(data.data);
        };
    
    const createForms = async (forms) => {
        // make post request to create people
            await fetch(URL, {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(forms),
            });
            // update list of people
            getForms();
          };
        
          useEffect(() => {
            getForms()
          }, []);
        
  return (
      <main>
        <Routes>
            <Route path='/' element={<Index forms={forms} createForms={createForms}/>}/>
            <Route path='About' element={<About />} />
            <Route path='FormsPage' element={<FormsPage />} />
            <Route path='/forms/:id' element={<Show />} />
        </Routes>
      </main>
  )
}

export default Main;

