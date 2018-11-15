import html from '../html.js';
import resultsApi from '../result-api.js';

function makeTemplate() {
    return html`
    <div class="question">

        <h2>"Rough game, Quidditch."<br>
        "Brutal, but no one's died in years."</h2>
        <p>What are you willing to sacrifice for the glory of your house?</p>
    </div>

    <div class="choices">
    <form id="quidditch-quiz">
        <label for="choice-a">
            <input type="radio" id="choice-a" name="quidditch" value="a" required>
            A. Uhhhh..... I&#8217m really just here to say I tried out. You know, for the the popularity gains. 
        </label>

        <label for="choice-b">
            <input type="radio" id="choice-b" name="quidditch" value="b" required>
            B. PUT ME IN COACH. I&#8217m nimble, quick and have god like eyesight.
        </label>

        <label for="choice-c">
            <input type="radio" id="choice-c" name="quidditch" value="c" required>
            C. Honestly, I don&#8217t care about winning. I just want to knock people off their brooms. 
        </label>
    
        <label for="choice-d">
            <input type="radio" id="choice-d" name="quidditch" value="d" required>
            D. All or nothing. I&#8217ve got dreams of playing quidditch professionally.   
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