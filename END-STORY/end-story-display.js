import html from '../html.js';
import resultsApi from '../result-api.js';
import MagicEnd from './the-end.js';

var apiData = resultsApi.getAll();
var userObj = apiData[0];
console.log('dataAPI', userObj);


function makeTemplate() {
    return html`
    <div id="wand"></div>
    <div id="house"></div>
    <div id="patronus"></div>
    <div id="career"></div>
    <div id="the-end"></div>
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
            wandContainer.textContent = 'Hermione';
        } else if(userObj.wand === 'b') {
            wandContainer.textContent = 'Hagrid';
        } else if(userObj.wand === 'c') {
            wandContainer.textContent = 'Peter Pettigrew';
        } else if(userObj.wand === 'd') {
            wandContainer.textContent = 'Harry';
        } else {
            wandContainer.textContent = 'Go back to Diagon Alley and finish taking the quiz!';
        }

        if(userObj.house === 'a'){
            houseContainer.textContent = 'Your house is Gryffindor.';
        } else if(userObj.house === 'b') {
            houseContainer.textContent = 'Your house is Ravenclaw.';
        } else if(userObj.house === 'c') {
            houseContainer.textContent = 'Slytherin';
        } else if(userObj.house === 'd') {
            houseContainer.textContent = 'Hufflepuff for the win.';
        } else {
            houseContainer.textContent = 'Go back to the Great Hall and finish taking the quiz!';
        }

        if(userObj.patronus === 'a'){
            patronusContainer.textContent = 'Ragdoll Cat';
        } else if(userObj.patronus === 'b') {
            patronusContainer.textContent = 'Basset Hound';
        } else if(userObj.patronus === 'c') {
            patronusContainer.textContent = 'Aardvark';
        } else if(userObj.patronus === 'd') {
            patronusContainer.textContent = 'Thestral';
        } else {
            patronusContainer.textContent = 'Go back to Defense Against the Dark Arts class and finish taking the quiz!';
        }

        if(userObj.career === 'a'){
            careerContainer.textContent = 'Auror';
        } else if(userObj.career === 'b') {
            careerContainer.textContent = 'Professor';
        } else if(userObj.career === 'c') {
            careerContainer.textContent = 'Writer for the Daily Prophet';
        } else if(userObj.career === 'd') {
            careerContainer.textContent = 'Minister of Magic';
        } else {
            careerContainer.textContent = 'Go back to Hogwarts and finish taking the quiz!';
        }

        const magicEnd = new MagicEnd();
        const endContainer = dom.querySelector('#the-end');
        endContainer.appendChild(magicEnd.render());

        return dom;
    }
}
