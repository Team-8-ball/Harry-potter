import html from '../html.js';
import DisplayText from './end-story-display.js';
import resultsApi from '../result-api.js';

var apiData = resultsApi.getAll();
var userObj = apiData[0];


function makeTemplate() {
    return html`
        <h1>${userObj.name}, here is your magical story...</h1>
        <div id="end-story"></div>
    `;
}

export default class App {
    render() {
        const dom = makeTemplate();
        const displayText = new DisplayText();
        const storyContainer = dom.querySelector('#end-story');
        storyContainer.appendChild(displayText.render());

        return dom;
    }
}