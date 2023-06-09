import React from 'react';

const FillablePlan = (props) => {
    return(
        <div className = 'fillablePlan'>
        <label htmlFor = "title"><h1>Treatment Plan</h1></label><br></br><br></br>
        <h2>Let's Make Your Plan</h2>
        <label htmlFor = "name">Let's Start with your name: <input placeholder= 'Enter Your First and Last Name' type='string'/></label><br></br><br></br>
        <label htmlFor = "goal">Tell me about one improvement your would like to see in yourself, in the next three months (as a result of our time together): <input placeholder= 'Enter Your Goal Here' type='string'/></label><br></br><br></br>

        <br></br><br></br>
        <label htmlFor = "frequency">How often do you need to meet? (Sometimes your Insurance Provider will have some input)</label>
            <select name= "frequency" id="frequency">
                <option value="One time weekly">Once Weekly</option> 
                <option value="Twice weekly">Twice Weekly</option> 
                <option value="Every Two weeks">Every Two Weeks</option> 
                <option value="Once Monthly">Once Monthly</option> 
            </select>
            <br></br><br></br>
            <label htmlFor = "coping">What are some things you do that help you feel better when you are having a tough time?: <input placeholder= 'Coping Skills' type='string'/></label><br></br><br></br>
            <label htmlFor = "contacts">Who can you call if you need somthing?: <input placeholder= 'Supportive Contacts' type='string'/></label><br></br><br></br>
            <br></br>
    </div>
    
    );
};

export default FillablePlan