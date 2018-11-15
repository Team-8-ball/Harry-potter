import html from '../html.js';
import resultsApi from '../result-api.js';

function makeTemplate() {
    return html`
        <div class="question">
            <h2>What is your greatest fear?</h2>
        </div>

        <div class="choices">
        <form id="wand-quiz">
            <label for="choice-a">
                <input type="radio" id="choice-a" name="wand" value="a" required>
                A. Imperfection.
            </label>
        
            <label for="choice-b">
                <input type="radio" id="choice-b" name="wand" value="b" required>
                B. Losing my dearest friend.
            </label>
        
            <label for="choice-c">
                <input type="radio" id="choice-c" name="wand" value="c" required>
                C. Being exposed for who I really am.
            </label>
        
            <label for="choice-d">
                <input type="radio" id="choice-d" name="wand" value="d" required>
                D. Isolation. I grew up in a cupboard under the stairs.    
            </label>
        </form>     
        </div>
    `;
}

export default class WandApp {
    render() {
        const dom = makeTemplate();
        
        const api = resultsApi;
        const form = dom.querySelector('form');
        const elements = form.elements;
        
        form.addEventListener('change', () => {
            const getApi = resultsApi.getAll();
            window.location = '../MAP/map.html';
            getApi[0].wand = elements.wand.value;
            api.saveResults();
        });
        
        return dom;
    }
}