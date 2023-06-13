import React from 'react';

const SkillsCheck = (props) => {
    return(
<fieldset>

any<legend for = "skills"><h2>What Skills Do You Want To Learn:</h2></legend>
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
<br></br>
</fieldset>

)};


export default SkillsCheck
