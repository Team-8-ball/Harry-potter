import html from '../html.js';
import resultsApi from '../result-api.js';
import MagicEnd from './the-end.js';
import dataApi from '../response-api.js';

var apiData = resultsApi.getAll();
var answers = dataApi.getAll();
var user = apiData[0];

function makeTemplate() {
    return html`
        <h1>${user.name}, here is your magical story...</h1>
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

// Nice job making a common function :)
// You can use more than one dynamic property, making
// this a lot shorter!
// Though I moved this inline in the render method below
// function printResults(answer, objectContainer, num) {
//     if(!answer) {
//         answer = 'e';
//     }

//     objectContainer.textContent = answers[num][answer];
// }

export default class DisplayText{
    
    render() {
        // nice job having different logic if no user
        if(!user){
            const dom = makeTemplate2();
            const button = dom.querySelector('button');
            button.addEventListener('click', () => {
                window.location = '../index.html';
            });
            return dom;
        } 

        // no need for else because if has return statement
        const dom = makeTemplate();

        // here's how you can reduce repreated code:
        const categories = ['wand', 'house', 'patronus', 'career', 'quidditch'];

        categories.forEach(category => {
            const container = dom.querySelector('#' + category);
            const answer = user[category] || 'e';
            // see notes in response-answers.js for changing data structure
            const options = answers[category];
            container.textContent = options[answer];
        });

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
