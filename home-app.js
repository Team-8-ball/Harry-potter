import html from './html.js';
import InputName from './home-input.js';


function makeTemplate() {
    return html` 
        <h1>Are you a Wizard?</h1>
        <div id="input-section"></div>
        <div id="direction-div">
        <h2>Discover your magical journey</h2>
        <p><span id="directions">Directions:</span><br> 
        Click on the icons on our Marauders Map, answer the questions, 
        and let your fate be determined by the power of Merlin.
        From your first day at Hogwarts to your magical career and even your untimely demise,
        we shall predict it all!</p>
        <p><span>Beware:</span><br>
        One question determines much of your fate so choose wisely!</p> 
        <p>Enter your name above to begin!</p>
        </div>
    `;
}

export default class App {

    render() {
        const dom = makeTemplate();
        const inputSection = dom.querySelector('#input-section');
        const inputName = new InputName();
        inputSection.appendChild(inputName.render());

        return dom;
    }
}