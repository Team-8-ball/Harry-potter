import html from '../html.js';
import resultsApi from '../result-api.js';

function makeTemplate() {
    return html`
    <div class="question">
        <h2>What is your greatest fear?</h2>
    </div>

    <div class="choices">
    <form id="house-quiz">
        <div>
            <input type="radio" id="choice-a" name="wand" value="a">
                <label for="choice-a">A. Imperfection.</label>
        </div>

        <div>
            <input type="radio" id="choice-b" name="wand" value="b">
                <label for="choice-b">B. Loosing my dearest friend.</label>
        </div>

        <div>
            <input type="radio" id="choice-c" name="wand" value="c">
                <label for="choice-c">C. Being exposed for who you really are.</label>
        </div>

        <div>
            <input type="radio" id="choice-d" name="wand" value="d">
                <label for="choice-d">D. Isolation. I grew up in a cupboard.</label>
        </div>
    </form>    

    </div>
    `;
}

export default class WandApp {
    render() {
        var api = resultsApi;
        const dom = makeTemplate();
        let form = dom.querySelector('form');
        const elements = form.elements;
        
        
        form.addEventListener('change', () => {
            var getApi = resultsApi.getAll();
            window.location = '../MAP/map.html';
            getApi[0].wand = elements.wand.value;
            console.log('this is the clicked choice', getApi[0].wand);

            api.saveResults();
        });

        return dom;
    }

}