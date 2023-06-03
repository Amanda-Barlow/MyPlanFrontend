import React from 'react';

const FillableForm = (props) => {
    return(
        <div className = 'fillableForm'>
        <h2>Let's Make Your Plan</h2>
        <label>Let's Start with your name: <input placeholder= 'Enter Your First and Last Name' type='string'/></label><br></br><br></br>
        <label>Tell me about one improvement your would like to see in yourself, in the next three months (as a result of our time together): <input placeholder= 'Enter Your Goal Here' type='string'/></label><br></br><br></br>
        <fieldset>
            <legend>Click the box to add any skills you want to learn in counseling:</legend>
        <div>
            <input type="checkbox" id="anxiety" name="anxiety" checked />
            <label for="anxiety">Anxiety Management</label>
        </div>

        <div>
            <input type="checkbox" id="emotionReg" name="emotionReg"/>
            <label for="emotionReg">Emotion Regulation</label>
        </div>

        <div>
            <input type="checkbox" id="distressTol" name="distressTol"/>
            <label for="distressTol">Distress Tolerance</label>
        </div>

        <div>
            <input type="checkbox" id="mindfulnees" name="mindfulnees"/>
            <label for="mindfulnees">Mindfulnees</label>
        </div>

        <div>
            <input type="checkbox" id="interpersonalEff" name="interpersonalEff"/>
            <label for="interpersonalEff">Interpersonal Effectiveness</label>
        </div>

        <div>
            <input type="checkbox" id="boundaries" name="boundaries"/>
            <label for="boundaries">Healthy Boundaries</label>
        </div>

        <div>
            <input type="checkbox" id="organization" name="organization"/>
            <label for="organization">Organization/Time Management</label>
        </div>

        <div>
            <input type="checkbox" id="depression" name="depression"/>
            <label for="depression">Depression Management</label>
        </div>

        <div>
            <input type="checkbox" id="grounding" name="grounding"/>
            <label for="grounding">Grounding Skills for EMDR</label>
        </div>

        <div>
            <input type="checkbox" id="substance" name="substance"/>
            <label for="substance">Substance Use Recovery</label>
        </div>

</fieldset>
        <br></br><br></br>
        <label for= "frequency">How often do you need to meet? (Sometimes your Insurance Provider will have some input)</label>
            <select name= "frequency" id="frequency">
                <option value="One time weekly">Once Weekly</option> 
                <option value="Twice weekly">Twice Weekly</option> 
                <option value="Every Two weeks">Every Two Weeks</option> 
                <option value="Once Monthly">Once Monthly</option> 
            </select>
            <br></br><br></br>
            <label>What are some things you do that help you feel better when you are having a tough time?: <input placeholder= 'Coping Skills' type='string'/></label><br></br><br></br>
            <label>Who can you call if you need somthing?: <input placeholder= 'Supportive Contacts' type='string'/></label><br></br><br></br>
    </div>
    );
};

export default FillableForm