import html from '../html.js';

function makeTemplate() {
    return html`
        
        <a href="../HOME/home.html">Home</a>
        <a href="../QUIZ-HOUSE/house-quiz.html"><img id="map-house" src="../assets/Hogwarts-Logo-PNG-Transparent.png" alt="Hogwarts Crest"></a>
        <a href="../PATRONUS/patronus-quiz.html"><img id="map-patronus" src="../assets/group-patronus.jpg" alt="Group of Patronus"></a>
        <a href="../WAND/wand-quiz.html"><img id="map-wand" src="../assets/Three-wands.png" alt="a trio of wands"></a>
        <a href="../CAREER/career-quiz.html"><img id="map-career" src="../assets/ministry-magic.png" alt="Ministry of Magic Seal"></a>
        <a href="../END-STORY/end-story.html"><img id="map-door" src="../assets/fancier-door.png" alt="A Secret Door - Your Future?"></a>
        `;
}







export default class App {
    render() {
        const dom = makeTemplate();

        return dom;
    }
}
