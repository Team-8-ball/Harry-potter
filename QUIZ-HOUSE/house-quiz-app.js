import html from '../html.js';
import resultsApi from '../result-api.js';

function makeTemplate() {
    return html`
    <div class="question">
        <h2>Which sounds most like you?</h2>
    </div>

    <div class="choices">
    <form id="house-quiz">
        <div>
            <input type="radio" id="choice-a" name="house" value="a">
                <label for="choice-a">A. I put more effort in a secret handshake than on a potions essay.</label>
        </div>

        <div>
            <input type="radio" id="choice-b" name="house" value="b">
                <label for="choice-b">B. I got detention for correcting the professor.</label>
        </div>

        <div>
            <input type="radio" id="choice-c" name="house" value="c">
                <label for="choice-c">C. I considered cheating on this quiz to get the house I want.</label>
        </div>

        <div>
            <input type="radio" id="choice-d" name="house" value="d">
                <label for="choice-d">D. I am a very good finder.</label>
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
            console.log('this is the api ', api);

            api.saveResults();
    
        
            console.log('this is the users choice');
        });

        return dom;
    }
}