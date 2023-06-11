import React from 'react';

const PHQ9 = (props) => {
    return(
        <div className = 'PHQ9Class'>
            <h1>PHQ-9</h1>
            <h3>Over the last 2 weeks, how often have you been bothered by any of the following problems?</h3>
            <h4>(Rating Slider = 0-Not At All, 1-Several Days, 2-More than half the days, 3-Nearly every day)</h4>
                <div className = "Slider">
                    <input type="range" id="PHQ1" name="PHQ1" min="0" max="3"/>
                    <label for=" Little interest or pleasure in doing things :">. Little interest or pleasure in doing things : </label>
                </div>
                <br></br>
                <div className = "Slider">
                    <input type="range" id="PHQ2" name="PHQ2" min="0" max="3"/>
                    <label for="Feeling down, depressed, or hopeless:">Feeling down, depressed, or hopeless: </label>
                </div>
                <br></br>
                <div className = "Slider">
                    <input type="range" id="PHQ3" name="PHQ3" min="0" max="3"/>
                    <label for="Trouble falling or staying asleep, or sleeping too much :">Trouble falling or staying asleep, or sleeping too much : </label>
                </div>
                <br></br>
                <div className = "Slider">
                    <input type="range" id="PHQ4" name="PHQ4" min="0" max="3"/>
                    <label for=" Feeling tired or having little energy "> Feeling tired or having little energy :</label>
                </div>
                <br></br>
                <div className = "Slider">
                    <input type="range" id="PHQ5" name="PHQ5" min="0" max="3"/>
                    <label for="5. Poor appetite or overeating l">5. Poor appetite or overeating :</label>
                </div>
                <br></br>
                <div className = "Slider">
                    <input type="range" id="PHQ6" name="PHQ6" min="0" max="3"/>
                    <label for=". Feeling bad about yourself — or that you are a failure or
                    have let yourself or your family down">. Feeling bad about yourself — or that you are a failure or
                    have let yourself or your family down:</label>
                </div>
                <br></br>
                <div className = "Slider">
                    <input type="range" id="PHQ7" name="PHQ7" min="0" max="3"/>
                    <label for="Feeling Trouble concentrating on things, such as reading the
                    newspaper or watching television afraid as is something awful might happen">Trouble concentrating on things, such as reading the
                    newspaper or watching television :</label>
                </div>
                <div className = "Slider">
                    <input type="range" id="PHQ8" name="PHQ8" min="0" max="3"/>
                    <label for="Moving or speaking so slowly that other people could have
                    noticed? Or the opposite — being so fidgety or restless
                    that you have been moving around a lot more than usual ">Moving or speaking so slowly that other people could have
                    noticed? Or the opposite — being so fidgety or restless
                    that you have been moving around a lot more than usual :</label>
                </div>
                <div className = "Slider">
                    <input type="range" id="PHQ9Q" name="PHQ9Q" min="0" max="3"/>
                    <label for="Thoughts that you would be better off dead or of hurting
                    yourself in some way ">Thoughts that you would be better off dead or of hurting
                    yourself in some way :</label>
                </div>
                <br></br>
                <br></br>
                <div className = "Slider">
                    <h3>If you checked off any problems, how difficult have these made it for you to do your work, take care of things at home, or get along with other people?</h3>
                    <input type="checkbox" id="difficulty" name="difficulty"/>
                    <label for="not">Not difficult at all</label><br></br>
                    <input type="checkbox" id="difficulty" name="difficulty"/>
                        <label for="some">Somewhat difficult</label><br></br>
                        <input type="checkbox" id="difficulty" name="difficulty"/>
                        <label for="very">Very difficult</label><br></br>
                        <input type="checkbox" id="difficulty" name="difficulty"/>
                        <label for="extreme">Extremely difficult</label><br></br>
                </div>
                <br></br>
                <br></br>
        </div>
    );
};

// const PHQ9Score = (props) => {
//     return 
// }

export default PHQ9