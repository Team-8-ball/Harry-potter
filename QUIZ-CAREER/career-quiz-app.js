import html from '../html.js';
import resultsApi from '../result-api.js';

function makeTemplate() {
    return html`
    <div class="question">
        <h2>What will you use your magic for?</h2>
    </div>

    <div class="choices">
    <form id="career-quiz">
        <div>
            <input type="radio" id="choice-a" name="career" value="a">
                <label for="choice-a">A. Defending muggles against the Dark Arts.</label>
        </div>

        <div>
            <input type="radio" id="choice-b" name="career" value="b">
                <label for="choice-b">B. Share my knowledge with the youth of tomorrow.</label>
        </div>

        <div>
            <input type="radio" id="choice-c" name="career" value="c">
                <label for="choice-c">C. Journalism</label>
        </div>

        <div>
            <input type="radio" id="choice-d" name="career" value="d">
                <label for="choice-d">D. Politics</label>
        </div>
    </form>
    </div>
    `;
}
export default class CareerApp {
    constructor(career) {
        this.choice = career;
        //this isn't used yet
    }
    
    render() {

        var api = resultsApi;

        const dom = makeTemplate();
        let form = dom.querySelector('form');
        const elements = form.elements;
        form.addEventListener('change', () => {
            event.preventDefault();

            window.location = '../MAP/map.html';
            var getApi = resultsApi.getAll();
            getApi[0].career = elements.career.value;
            console.log('this is the api ', api);

            api.saveResults();
    
        
            console.log('this is the users choice');
        });

        return dom;
    }
}