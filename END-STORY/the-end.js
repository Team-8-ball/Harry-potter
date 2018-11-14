import html from '../html.js';

const magicDeaths = [
    'In the end, you were eaten by a hippogriff.',
    'In the end, you got lost in the Floo Network.',
    'In the end, you were killed by a kiss of death from a dementor.',
    'In the end, you were smacked in the face by a snitch.',
    'In the end, you fell off your broom during a Quidditch match.',
    'In the end, you looked in the eye of a basilisk.',
    'In the end, you were sent to Azkaban for murder. Avada Kedavra!'
];

function makeTemplate() {
    return html`
    <span id="death-time"></span>
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
