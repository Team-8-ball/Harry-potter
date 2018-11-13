import html from '../html.js';
import resultsApi from '../result-api.js';

function makeTemplate() {
    return html`
    <div class="question">
        <h2>Which sounds most like you?</h2>
    </div>

    <div class="choices">
    <form id="career-quiz">
        <div>
            <input type="radio" id="choice-a" name="career" value="a">
                <label for="choice-a">A. I put more effort in a secret handshake than on a potions essay.</label>
        </div>

        <div>
            <input type="radio" id="choice-b" name="career" value="b">
                <label for="choice-b">B. I got detention for correcting the professor.</label>
        </div>

        <div>
            <input type="radio" id="choice-c" name="career" value="c">
                <label for="choice-c">C. I considered cheating on this quiz to get the career I want.</label>
        </div>

        <div>
            <input type="radio" id="choice-d" name="career" value="d">
                <label for="choice-d">D. I am a very good finder.</label>
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