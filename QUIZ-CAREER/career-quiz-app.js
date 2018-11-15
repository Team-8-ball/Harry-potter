import html from '../html.js';
import resultsApi from '../result-api.js';

function makeTemplate() {
    return html`
        <div class="question">
            <h2>What will you use your magic for?</h2>
        </div>

        <div class="choices">
        <form id="career-quiz">
            <label for="choice-a">
                <input type="radio" id="choice-a" name="career" value="a" required>
                A. After what happened to the Potter family, I have to protect the muggles.
            </label>
        
            <label for="choice-b">
                <input type="radio" id="choice-b" name="career" value="b" required>
                B. Share my interest of the complexity and depth of wizardry with the world!
            </label>
        
            <label for="choice-c">
                <input type="radio" id="choice-c" name="career" value="c" required>
                C. The world is large and the night full of terrors. I want to know EVERYTHING that other people are doing in the scene!
            </label>
        
            <label for="choice-d">
                <input type="radio" id="choice-d" name="career" value="d" required>
                D. Being a wizard is great and all but the real magic happens in the democratic process. 
            </label>
        </form>
        </div>
    `;
}
export default class CareerApp {    
    render() {
        const dom = makeTemplate();
        
        const api = resultsApi;
        let form = dom.querySelector('form');
        const elements = form.elements;
        
        form.addEventListener('change', () => {
            window.location = '../MAP/map.html';
            const getApi = resultsApi.getAll();
            getApi[0].career = elements.career.value;

            api.saveResults();
        });
        return dom;
    }
}