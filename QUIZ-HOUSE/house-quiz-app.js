import html from '../html.js';
import resultsApi from '../result-api.js';

function makeTemplate() {
    return html`
    <div id="question">
        <h2>What is your favorite color scheme?</h2>
    </div>

    <div id="choices">
    <form id="house-quiz">
        <div>
            <input type="radio" id="choice-a" name="house" value="a">
                <label for="choice-a">A. Scarlet and Gold</label>
        </div>

        <div>
            <input type="radio" id="choice-b" name="house" value="b">
                <label for="choice-b">B. Blue and Bronze</label>
        </div>

        <div>
            <input type="radio" id="choice-c" name="house" value="c">
                <label for="choice-c">C. Green and Silver</label>
        </div>

        <div>
            <input type="radio" id="choice-d" name="house" value="d">
                <label for="choice-d">D. Yellow and Black</label>
        </div>
    </form>
    </div>
    `;
}
export default class HouseApp {
    constructor(house) {
        this.choice = house;
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
            getApi[0].house = elements.house.value;
            console.log('this is the api ', api);

            api.saveResults();
    
        
            console.log('this is the users choice');
        });

        return dom;
    }
}