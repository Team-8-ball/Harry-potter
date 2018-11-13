import html from '../html.js';
import resultsApi from '../result-api.js';

function makeTemplate() {
    return html`
    <div class="question">
        <h2>Which sounds most like you?</h2>
        <p>You and two friends need to cross a bridge guarded by a river troll who insists on fighting one of you before he will let all of you pass. Do you:</p>
    </div>

    <div class="choices">
    <form id="house-quiz">
        <div>
            <input type="radio" id="choice-a" name="house" value="a">
                <label for="choice-a">A. I volunteer to fight!</label>
        </div>

        <div>
            <input type="radio" id="choice-b" name="house" value="b">
                <label for="choice-b">B. I attempt to confuse the troll into letting all three of us to pass without fighting.</label>
        </div>

        <div>
            <input type="radio" id="choice-c" name="house" value="c">
                <label for="choice-c">C. Sacrifice one of my friends for the good of the rest.</label>
        </div>

        <div>
            <input type="radio" id="choice-d" name="house" value="d">
                <label for="choice-d">D. Rock, paper, scissors.</label>
        </div>
    </form>
    </div>
    `;
}
export default class HouseApp {
    render() {

        var api = resultsApi;

        const dom = makeTemplate();
        let form = dom.querySelector('form');
        const elements = form.elements;
        form.addEventListener('change', () => {
            event.preventDefault();

            window.location = '../MAP/map.html';
            var getApi = resultsApi.getAll();
            getApi[0].house = elements.house.value;
            api.saveResults();
    
        
        });

        return dom;
    }
}