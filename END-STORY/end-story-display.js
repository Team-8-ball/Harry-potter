import html from '../html.js';
import resultsApi from '../result-api.js';
import MagicEnd from './the-end.js';
import dataApi from '../data-api.js';

var apiData = resultsApi.getAll();
var answers = dataApi.getAll();
var userObj = apiData[0];

function makeTemplate() {
    return html`
    <div id="wand-response">
        <span id="wand"></span>
    </div>
    <div id="house-response">
        Filler text.
        <span id="house"></span>
        Filler text.
    </div>
    <div id="patronus-response">
        <span id="patronus"></span>
    </div>
    <div id="career-response">
        <span id="career"></span>
    </div>
    <div id="the-end-response">
        <span id="the-end"></span>
    </div>
    <div id="return-home">
        <button id="play-again">Play Again!</button>
    </div>
    `;
}

export default class DisplayText{
    
    render() {
        const dom = makeTemplate();
        const wandContainer = dom.querySelector('#wand');
        const houseContainer = dom.querySelector('#house');
        const patronusContainer = dom.querySelector('#patronus');
        const careerContainer = dom.querySelector('#career');

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
