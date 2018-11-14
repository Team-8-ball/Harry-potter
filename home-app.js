import html from './html.js';
import InputName from './home-input.js';


function makeTemplate() {
    return html` 
        <h1> Are you a Wizard? </h1>
        <div id="input-section"> </div>

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