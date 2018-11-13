import html from '../html.js';
import resultsApi from '../result-api.js';

let user = resultsApi.getAll();

function makeTemplate() {
    return html`
        
        <a href="../HOME/home.html">Home</a>
        <a href="../QUIZ-HOUSE/house-quiz.html"><img id="map-house" src="../assets/Hogwarts-Logo-PNG-Transparent.png" alt="Hogwarts Crest"></a>
        <a href="../QUIZ-PATRONUS/patronus-quiz.html"><img id="map-patronus" src="../assets/group-patronus.jpg" alt="Group of Patronus"></a>
        <a href="../QUIZ-WAND/wand-quiz.html"><img id="map-wand" src="../assets/Three-wands.png" alt="a trio of wands"></a>
        <a href="../QUIZ-CAREER/career-quiz.html"><img id="map-career" src="../assets/ministry-magic.png" alt="Ministry of Magic Seal"></a>
        <a href="../END-STORY/end-story.html"><img id="map-door" src="../assets/fancier-door.png" alt="A Secret Door - Your Future?"></a>
        `;
}



export default class App {
    constructor(){
        this.user = user[0];
    }


    render() {
        const dom = makeTemplate();
        let house = dom.querySelector('#map-house');
        let patronus = dom.querySelector('#map-patronus');
        let wand = dom.querySelector('#map-wand');
        let career = dom.querySelector('#map-career');



        console.log('xyz', this.user);
        if(this.user.house) {
            house.classList.add('hidden');
        }
        if(this.user.patronus) {
            patronus.classList.add('hidden');
        }
        if(this.user.wand) {
            wand.classList.add('hidden');
        }
        if(this.user.career) {
            career.classList.add('hidden');
        }

        return dom;
    }
}
