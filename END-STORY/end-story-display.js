import html from '../html.js';
import resultsApi from '../result-api.js';
import MagicEnd from './the-end.js';
import dataApi from '../response-api.js';

var apiData = resultsApi.getAll();
var answers = dataApi.getAll();
var userObj = apiData[0];

function makeTemplate() {
    return html`
        <h1>${userObj.name}, here is your magical story...</h1>
        <div id="wand-response">
            Diagon Alley or Knocturn Alley? Whatever your pick, 
            you need a wand before you head off for school. 
            Remember, the wand chooses the witch or wizard! 
            <span id="wand"></span>
        </div>

        <div id="house-response">
            At the Sorting Hat Ceremony, you were difficult to place.
            "I see great promise in you," said the hat. 
            "But where to put you..." You held your breath and then...
            <span id="house"></span>
        </div>

        <div id="patronus-response">
            Only the best witches and wizards manage to cast a Patronus, 
            but you're exceptional! That last encounter with Fluffy helped 
            you along. 
            <span id="patronus"></span>
        </div>

        <div id="career-response">
            <span id="career"></span>
        </div>

        <div id="quidditch-response">
            <span id="quidditch"></span>
        </div>

        <div id="the-end-response">
            What a journey you've had! Definitely one for the wizarding books! 
            However, everyone meets their demise. 
            <span id="the-end">In the end, you </span>
        </div>

        <div id="return-home">
            <button id="play-again">Play Again!</button>
            <a href="../ABOUT-US/about-us.html"><img src="../ASSETS/icon_7729.png" alt="Go to our about us page!"></a>
        </div>

        <p>Click Harry to learn about us!</p>
    `;
}

function makeTemplate2() {
    return html`
        <div>You have to play the game to get your results!</div>
        <div id="return-home">
            <button id="return-home">Return Home</button>
        </div>
    `;
}

function printResults(userObj, objectContainer, num) {
    if(userObj === 'a') {
        objectContainer.textContent = answers[num].a;
    } else if(userObj === 'b') {
        objectContainer.textContent = answers[num].b;
    } else if(userObj === 'c') {
        objectContainer.textContent = answers[num].c;
    } else if(userObj === 'd') {
        objectContainer.textContent = answers[num].d;
    } else {
        objectContainer.textContent = answers[num].e;
    }
}

export default class DisplayText{
    
    render() {
        if(!userObj){
            const dom = makeTemplate2();
            const button = dom.querySelector('button');
            button.addEventListener('click', () => {
                window.location = '../index.html';
            });
            return dom;
        } else {
            const dom = makeTemplate();
            const wandContainer = dom.querySelector('#wand');
            const houseContainer = dom.querySelector('#house');
            const patronusContainer = dom.querySelector('#patronus');
            const careerContainer = dom.querySelector('#career');
            const quidditchContainer = dom.querySelector('#quidditch');

            printResults(userObj.wand, wandContainer, 0);
            printResults(userObj.house, houseContainer, 1);
            printResults(userObj.patronus, patronusContainer, 2);
            printResults(userObj.career, careerContainer, 3);
            printResults(userObj.quidditch, quidditchContainer, 4);

            const button = dom.querySelector('button');
            button.addEventListener('click', () => {
                localStorage.clear();
                window.location = '../index.html';
            });

            const magicEnd = new MagicEnd();
            const endContainer = dom.querySelector('#the-end');
            endContainer.appendChild(magicEnd.render());
            
            return dom;
        }
    }
}
