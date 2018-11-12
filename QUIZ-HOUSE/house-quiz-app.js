import html from '../html.js';

function makeTemplate() {
    return html`
    <h2>What is your favorite color scheme?</h2>

    <div>
        <input type="radio" id="choice-a" name="house" value="a" checked>
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

    `;
}

export default class HouseApp {
    render() {
        const dom = makeTemplate();
        return dom;
    }
}