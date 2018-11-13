import html from '../html.js';
import resultsApi from '../result-api.js';

var apiData = resultsApi.getAll();
var userObj = apiData[0];
console.log('dataAPI', userObj);


function makeTemplate() {
    return html`
    <div id="wand">Wand!</div>
    <div id="house">Test!</div>
    <div id="patronus">Patronus!</div>
    <div id="career">Magical Career!</div>
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
            wandContainer.textContent = 'your wand choice a story here';
        } else if(userObj.wand === 'b') {
            wandContainer.textContent = 'your wand choice b story here!';
        } else if(userObj.wand === 'c') {
            wandContainer.textContent = 'your wand choice c story here';
        } else if(userObj.wand === 'd') {
            wandContainer.textContent = 'your wand choice d story here.';
        } else{
            wandContainer.textContent = 'Go back to Diagon Alley and finish taking the quiz!';
        }

        if(userObj.house === 'a'){
            houseContainer.textContent = 'your house choice a story here';
        } else if(userObj.house === 'b') {
            houseContainer.textContent = 'your house choice b story here!';
        } else if(userObj.house === 'c') {
            houseContainer.textContent = 'your house choice c story here';
        } else if(userObj.house === 'd') {
            houseContainer.textContent = 'your house choice d story here.';
        } else {
            houseContainer.textContent = 'Go back to the Great Hall and finish taking the quiz!';
        }

        if(userObj.patronus === 'a'){
            patronusContainer.textContent = 'your patronus choice a story here';
        } else if(userObj.patronus === 'b') {
            patronusContainer.textContent = 'your patronus choice b story here!';
        } else if(userObj.patronus === 'c') {
            patronusContainer.textContent = 'your patronus choice c story here';
        } else if (userObj.patronus === 'd') {
            patronusContainer.textContent = 'your patronus choice d story here.';
        } else {
            patronusContainer.textContent = 'Go back to Defense Against the Dark Arts class and finish taking the quiz!';
        }

        if(userObj.career === 'a'){
            careerContainer.textContent = 'your career choice a story here';
        } else if(userObj.career === 'b') {
            careerContainer.textContent = 'your career choice b story here!';
        } else if(userObj.career === 'c') {
            careerContainer.textContent = 'your career choice c story here';
        } else if(userObj.career === 'd') {
            careerContainer.textContent = 'your career choice d story here.';
        } else {
            careerContainer.textContent = 'Go back to Hogwarts and finish taking the quiz!';
        }

        return dom;
    }
}
