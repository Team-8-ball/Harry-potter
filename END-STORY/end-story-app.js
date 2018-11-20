import html from '../html.js';
import DisplayText from './end-story-display.js';

function makeTemplate() {
    return html`
        <div id="end-story"></div>
    `;
}

export default class App {
    render() {
        const dom = makeTemplate();
        
        const storyContainer = dom.querySelector('#end-story');
        const displayText = new DisplayText();
        storyContainer.appendChild(displayText.render());

        return dom;
    }
}