import React from 'react';


const SkillsCheck = (props) => {
    return(
        <div>
        <label htmlFor = "skills">What Skills Do You Want To Learn In Counseling?</label>
            <select name= "skills" id="skills">
                <option value="anxiety">Anxiety Management</option> 
                <option value="emotionReg">Emotion Regulation</option> 
                <option value="distressTol">Distress Tolerance</option> 
                <option value="mindfulness">Mindfulness</option> 
                <option value="interpersonalEff">Interpersonal Effectiveness</option> 
                <option value="boundaries">Boundaries</option> 
                <option value="organization">Organization/Time Management</option> 
                <option value="depression">Depression Management</option> 
                <option value="grounding">Grounding Skills for EMDR</option> 
                <option value="substance">Substance Use Recovery</option> 
            </select>
        </div>)};



export default SkillsCheck
