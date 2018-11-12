import html from '../html.js';
import InputName from './home-input.js';


function makeTemplate() {
    return html` 
        <h1> Hello World </h1>
        <div id="input-section"> </div>

    `;
}

export default class App {

    constructor(onSignIn) {
        this.onSignIn = onSignIn;
    }


    render() {
        const dom = makeTemplate();
        const inputSection = dom.querySelector('#input-section');
        const inputName = new InputName(this.onSignIn);
        inputSection.appendChild(inputName.render());

        return dom;
    }
}