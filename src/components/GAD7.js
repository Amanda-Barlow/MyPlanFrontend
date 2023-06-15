import React from 'react';

const GAD7 = (props) => {
    return(
        <div className = 'GAD7Class'>
            <h1>GAD-7</h1>
            <h3>Over the last 2 weeks, how often have you been bothered by the following problems?</h3>
            <h4>(Rating Slider = 0-Not At All, 1-Several Days, 2-More than half the days, 3-Nearly every day)</h4>
                <div className = "Slider">
                    <input type="range" id="GAD1" name="GAD1" min="0" max="3"/>
                    <label htmlFor="Feeling nervous, anxious or on edge:">Feeling nervous, anxious or on edge: </label>
                </div>
                <br></br>
                <div className = "Slider">
                    <input type="range" id="GAD2" name="GAD2" min="0" max="3"/>
                    <label htmlFor="Not being able to stop or control worrying:">Not being able to stop or control worrying: </label>
                </div>
                <br></br>
                <div className = "Slider">
                    <input type="range" id="GAD3" name="GAD3" min="0" max="3"/>
                    <label htmlFor="Worrying too much about different things:">Worrying too much about different things: </label>
                </div>
                <br></br>
                <div className = "Slider">
                    <input type="range" id="GAD4" name="GAD4" min="0" max="3"/>
                    <label htmlFor="Trouble relaxing:">Trouble relaxing:</label>
                </div>
                <br></br>
                <div className = "Slider">
                    <input type="range" id="GAD5" name="GAD5" min="0" max="3"/>
                    <label htmlFor="Being so restless that it's hard to sit still">Being so restless that it is hard to sit still:</label>
                </div>
                <br></br>
                <div className = "Slider">
                    <input type="range" id="GAD6" name="GAD6" min="0" max="3"/>
                    <label htmlFor="Becoming easily annoyed or irritable">Becoming easily annoyed or irritable:</label>
                </div>
                <br></br>
                <div className = "Slider">
                    <input type="range" id="GAD7Q" name="GAD7Q" min="0" max="3"/>
                    <label htmlFor="Feeling afraid as is something awful might happen">Feeling afraid as if something awful might happen:</label>
                </div>
                <br></br>

                <div className = "Slider">
                    <h3>If you checked off any problems, how difficult have these made it for you to do your work, take care of things at home, or get along with other people?</h3>
                    <input type="checkbox" id="difficulty" name="difficulty"/>
                    <label htmlFor="not">Not difficult at all</label><br></br>
                    <input type="checkbox" id="difficulty" name="difficulty"/>
                        <label htmlFor="some">Somewhat difficult</label><br></br>
                        <input type="checkbox" id="difficulty" name="difficulty"/>
                        <label htmlFor="very">Very difficult</label><br></br>
                        <input type="checkbox" id="difficulty" name="difficulty"/>
                        <label htmlFor="extreme">Extremely difficult</label><br></br>
                </div>
                <br></br>
        </div>
    );
};

// const slider = document.getElementById('Slider');
// const GAD7Score = (props) => {
//     slider.oninput = function() {
//         const value = this.value
//     }
//     return 
// }


export default GAD7

                   