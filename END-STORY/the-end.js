import html from '../html.js';

const magicDeaths = [
    'were eaten by a hippogriff.',
    'got lost in the Floo Network.',
    'were killed by a kiss of death from a dementor.',
    'were smacked in the face by a snitch.',
    'fell off your broom during a Quidditch match.',
    'looked in the eye of a basilisk.',
    'were sent to Azkaban for murder. Avada Kedavra!'
];

function makeTemplate() {
    return html`
    <span id="death-time"></span>
    `;
}

export default class MagicEnd {
    render() {
        function getRandomNum(max) {
            return Math.floor(Math.random(max) * 7);
        }
        
        const deathResult = magicDeaths[getRandomNum()];
        const dom = makeTemplate();
        const deathContainer = dom.querySelector('#death-time');
        deathContainer.textContent = deathResult;
        return dom;
    }
}
