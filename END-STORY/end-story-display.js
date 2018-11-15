import html from '../html.js';
import resultsApi from '../result-api.js';
import MagicEnd from './the-end.js';
import dataApi from '../data-api.js';

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
            <span id="the-end"></span>
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

export default class DisplayText{
    render() {
        if(!userObj){
            console.log(!userObj);
            const dom = makeTemplate2();
            const button = dom.querySelector('button');
            button.addEventListener('click', () => {
                window.location = '../index.html';
            });
            return dom;
        }
        else {
            const dom = makeTemplate();
            const wandContainer = dom.querySelector('#wand');
            const houseContainer = dom.querySelector('#house');
            const patronusContainer = dom.querySelector('#patronus');
            const careerContainer = dom.querySelector('#career');
            const quidditchContainer = dom.querySelector('#quidditch');
    
            if(userObj.wand === 'a'){
                wandContainer.textContent = answers[0].a;
            } else if(userObj.wand === 'b') {
                wandContainer.textContent = answers[0].b;
            } else if(userObj.wand === 'c') {
                wandContainer.textContent = answers[0].c;
            } else if(userObj.wand === 'd') {
                wandContainer.textContent = answers[0].d;
            } else {
                wandContainer.textContent = answers[0].e;
            }
    
            if(userObj.house === 'a'){
                houseContainer.textContent = answers[1].a;
            } else if(userObj.house === 'b') {
                houseContainer.textContent = answers[1].b;
            } else if(userObj.house === 'c') {
                houseContainer.textContent = answers[1].c;
            } else if(userObj.house === 'd') {
                houseContainer.textContent = answers[1].d;
            } else {
                houseContainer.textContent = answers[1].e;
            }
    
            if(userObj.patronus === 'a'){
                patronusContainer.textContent = answers[2].a;
            } else if(userObj.patronus === 'b') {
                patronusContainer.textContent = answers[2].b;
            } else if(userObj.patronus === 'c') {
                patronusContainer.textContent = answers[2].c;
            } else if(userObj.patronus === 'd') {
                patronusContainer.textContent = answers[2].d;
            } else {
                patronusContainer.textContent = answers[2].e;
            }
    
            if(userObj.career === 'a'){
                careerContainer.textContent = answers[3].a;
            } else if(userObj.career === 'b') {
                careerContainer.textContent = answers[3].b;
            } else if(userObj.career === 'c') {
                careerContainer.textContent = answers[3].c;
            } else if(userObj.career === 'd') {
                careerContainer.textContent = answers[3].d;
            } else {
                careerContainer.textContent = answers[3].e;
            }
            if(userObj.quidditch === 'a'){
                quidditchContainer.textContent = answers[4].a;
            } else if(userObj.quidditch === 'b') {
                quidditchContainer.textContent = answers[4].b;
            } else if(userObj.quidditch === 'c') {
                quidditchContainer.textContent = answers[4].c;
            } else if(userObj.quidditch === 'd') {
                quidditchContainer.textContent = answers[4].d;
            } else {
                quidditchContainer.textContent = answers[4].e;
            }
    
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
