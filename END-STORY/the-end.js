import html from '../html.js';

const magicDeaths = [
    'And in the end, you were eaten by a hippogriff.',
    'And in the end, you got lost in the Floo Network.',
    'And in the end, you were killed by a kiss of death from a dementor.',
    'And in the end, you were smacked in the face by a snitch.',
    'And in the end, you fell off your broom during a Quidditch match.',
    'And in the end, you looked in the eye of a basilisk.',
    'And in the end, you were sent to Azkaban for murder. Avada Kedavra!'
];

function makeTemplate() {
    return html`
    <p id="death-time"></p>
    `;
}

export default class MagicEnd {
    render() {
        function getRandomNum (max) {
            return Math.floor(Math.random(max) * 7);
        }
        
        const deathResult = magicDeaths[getRandomNum()];
        const dom = makeTemplate();
        const deathContainer = dom.querySelector('#death-time');
        deathContainer.textContent = deathResult;
        return dom;
    }
}
