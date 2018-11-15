import html from '../html.js';
import resultsApi from '../result-api.js';

function makeTemplate() {
    return html`
    <div class="question">
    <h2>Think of your happiest memory... What comes to mind first?</h2>
    </div>

    <div class="choices">
    <form id="patronus-quiz">
        <label for="choice-a">
            <input type="radio" id="choice-a" name="patronus" value="a" required>
            A. Fun, carefree days with my family.  
        </label>

        <label for="choice-b">
            <input type="radio" id="choice-b" name="patronus" value="b" required>
            B. Mastering that lab that I spent days working on! 
        </label>

        <label for="choice-c">
            <input type="radio" id="choice-c" name="patronus" value="c" required>
            C. Outlasting the competition to win the last Goblet of Fire competition. I'm the best!
        </label>

        <label for="choice-d">
            <input type="radio" id="choice-d" name="patronus" value="d" required>
            D. The love of my mother, who then died before my eyes.
        </label>
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
        console.log('dom', 'form', dom, form);
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