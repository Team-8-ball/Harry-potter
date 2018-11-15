import html from '../html.js';
import resultsApi from '../result-api.js';

function makeTemplate() {
    return html`
        <div class="question">
            <h2>You and two friends need to cross a bridge guarded by a river troll who insists on fighting one of you before he will let all of you pass.</h2>
            <p>Which sounds most like you?</p>
        </div>

        <div class="choices">
        <form id="house-quiz">
            <label for="choice-a">
                <input type="radio" id="choice-a" name="house" value="a" required>
                A. I volunteer to fight!
            </label>

            <label for="choice-b">
                <input type="radio" id="choice-b" name="house" value="b" required>
                B. I attempt to confuse the troll into letting all three of us to pass without fighting.
            </label>

            <label for="choice-c">
                <input type="radio" id="choice-c" name="house" value="c" required>
                C. Sacrifice one of my friends for the good of the rest.
            </label>
        
            <label for="choice-d">
                <input type="radio" id="choice-d" name="house" value="d" required>
                D. Rock, paper, scissors.
            </label>
        </form>
        </div>
    `;
}
export default class HouseApp {
    render() {
        const dom = makeTemplate();

        const api = resultsApi;
        const form = dom.querySelector('form');
        const elements = form.elements;
        
        form.addEventListener('change', () => {
            window.location = '../MAP/map.html';
            var getApi = resultsApi.getAll();
            getApi[0].house = elements.house.value;
            api.saveResults();
        });
        return dom;
    }
}