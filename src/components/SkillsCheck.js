import React from 'react';

const SkillsCheck = (props) => {
    return(
<fieldset>
<legend for = "skills"><h2>What Skills Do You Want To Learn:</h2></legend>

<div>
<input type="checkbox" checked={isChecked} onChange={() => (!isChecked)} id="anxiety" name="anxiety" />
<label for="anxiety">Anxiety Management</label>
</div>

<div>
<input type="checkbox" checked={isChecked} onChange={() => (!isChecked)} id="emotionReg" name="emotionReg"/>
<label for="emotionReg">Emotion Regulation</label>
</div>

<div>
<input type="checkbox" checked={isChecked} onChange={() => (!isChecked)} id="distressTol" name="distressTol"/>
<label for="distressTol">Distress Tolerance</label>
</div>

<div>
<input type="checkbox" checked={isChecked} onChange={() => (!isChecked)} id="mindfulnees" name="mindfulnees"/>
<label for="mindfulnees">Mindfulnees</label>
</div>

<div>
<input type="checkbox" checked={isChecked} onChange={() => (!isChecked)} id="interpersonalEff" name="interpersonalEff"/>
<label for="interpersonalEff">Interpersonal Effectiveness</label>
</div>

<div>
<input type="checkbox" checked={isChecked} onChange={() => (!isChecked)} id="boundaries" name="boundaries"/>
<label for="boundaries">Healthy Boundaries</label>
</div>

<div>
<input type="checkbox" checked={isChecked} onChange={() => (!isChecked)} id="organization" name="organization"/>
<label for="organization">Organization/Time Management</label>
</div>

<div>
<input type="checkbox" checked={isChecked} onChange={() => (!isChecked)} id="depression" name="depression"/>
<label for="depression">Depression Management</label>
</div>

<div>
<input type="checkbox" checked={isChecked} onChange={() => (!isChecked)} id="grounding" name="grounding"/>
<label for="grounding">Grounding Skills for EMDR</label>
</div>

<div>
<input type="checkbox" checked={isChecked} onChange={() => (!isChecked)} id="substance" name="substance"/>
<label for="substance">Substance Use Recovery</label>
</div>
<br></br>
</fieldset>

)};


export default SkillsCheck
