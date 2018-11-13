import html from '../html.js';
import resultsApi from '../result-api.js';

function makeTemplate() {
    return html`
    <div class="question">
    <h2>Explore your happiest memories... Think of your more treasured memory. What comes to mind first?</h2>
</div>

<div class="choices">
<form id="patronus-quiz">
    <input type="radio" id="choice-a" name="patronus" value="a">
        <label for="choice-a">A. My family</label>

    <input type="radio" id="choice-b" name="patronus" value="b">
        <label for="choice-b">B. My friends</label>

    <input type="radio" id="choice-c" name="patronus" value="c">
        <label for="choice-c">C. Personal achievements</label>

    <input type="radio" id="choice-d" name="patronus" value="d">
        <label for="choice-d">D. Happy memories? What?</label>
</form>
</div>
    `;
}
export default class PatronusApp {
    constructor(patronus) {
        this.choice = patronus;
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
            getApi[0].patronus = elements.patronus.value;

            api.saveResults();

            console.log('this is the users choice');
        });

        return dom;
    }
}