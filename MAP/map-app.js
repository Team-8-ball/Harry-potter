import html from '../html.js';

function makeTemplate() {
    return html`
        <h1>Hello! Imma Map!</h1>
        <a href="../QUIZ-HOUSE/house-quiz.html"><img id="map-house" src="../assets/Hogwarts_Crest.jpg" alt="Hogwarts Crest"></a>
        <a href="../END-STORY/end-story.html"><img id="map-door" src="../assets/door.jpg" alt="A Secret Door - Your Future?"></a>
        <a href="../home.html">Home</a>
        `;
}







export default class App {
    render() {
        const dom = makeTemplate();

        return dom;
    }
}
