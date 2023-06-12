import React from 'react';


const SafetyPlan = (props) => {
    return(
        <div className = 'safetyPlan'>
        <h1>Safety Plan</h1>
        <h2>What can be done to help you stay safe?</h2>
        <h3>If you are having self-harm thoughts, you can reach out to the National Suicide Hotline at 988 </h3>
        <label for = "crisis">Who else could you call if you were having suicidal thoughts? <input placeholder= 'Enter Name & Number' type='string'/></label><br></br><br></br>
        <label for = "coping">What can you do to manage your emotions or distract yourself? <input placeholder= 'Add Coping Skills' type='string'/></label><br></br><br></br>
        <label for = "provider">Do you have a provider we should call? <input placeholder= 'Enter Name & Number' type='string'/></label><br></br><br></br>
        <label for = "petsKids">Do you have pets or kids we need to help make arrangements for (if you are hospitalized)? <input placeholder= 'Enter Info' type='string'/></label><br></br><br></br>
        </div>
    );
};

export default SafetyPlan
