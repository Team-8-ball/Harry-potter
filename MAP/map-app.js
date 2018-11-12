import html from '../html.js';

function makeTemplate() {
    return html`
        <h1>Hello! Imma Map!</h1>
        <img id="map-hat" src="../assets/sorting-hat.jpg" alt="A Sorting Hat">
        <a href="../QUIZ-HOUSE/house-quiz.html"><img id="map-house" src="../assets/houses.jpg" alt="House Medallions"></a>
        <a href="../END-STORY/end-story.html"><img id="map-door" src="../assets/door.jpg" alt="A Secret Door - Your Future?"></a>
        `;
}







export default class App {
    render() {
        const dom = makeTemplate();

        return dom;
    }
}
