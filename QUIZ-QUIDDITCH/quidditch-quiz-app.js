import html from '../html.js';
import resultsApi from '../result-api.js';

function makeTemplate() {
    return html`
    <div class="question">
        <h3>You and two friends need to cross a bridge guarded by a river troll who insists on fighting one of you before he will let all of you pass.</h3>
        <p>Which sounds most like you?</p>
    </div>

    <div class="choices">
    <form id="quidditch-quiz">
        <label for="choice-a">
            <input type="radio" id="choice-a" name="quidditch" value="a">
            A. I volunteer to fight!
        </label>

        <label for="choice-b">
            <input type="radio" id="choice-b" name="quidditch" value="b">
            B. I attempt to confuse the troll into letting all three of us to pass without fighting.
        </label>

        <label for="choice-c">
            <input type="radio" id="choice-c" name="quidditch" value="c">
            C. Sacrifice one of my friends for the good of the rest.
        </label>
    
        <label for="choice-d">
            <input type="radio" id="choice-d" name="quidditch" value="d">
            D. Rock, paper, scissors.
        </label>
    </form>
    </div>
    `;
}
export default class QuidditchApp {
    render() {

        var api = resultsApi;

        const dom = makeTemplate();
        let form = dom.querySelector('form');
        const elements = form.elements;
        form.addEventListener('change', () => {

            window.location = '../MAP/map.html';
            var getApi = resultsApi.getAll();
            getApi[0].quidditch = elements.quidditch.value;
            api.saveResults();
    
        });

        return dom;
    }
}