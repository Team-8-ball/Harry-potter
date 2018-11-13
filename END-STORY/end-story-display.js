import html from '../html.js';
import resultsApi from '../result-api.js';

var apiData = resultsApi.getAll();
var userObj = apiData[0];
console.log('dataAPI', userObj);


function makeTemplate() {
    return html`
    <div id="house">Test!</div>
    `;
}


export default class DisplayText{
    
    render() {
        const dom = makeTemplate();
        const displayContainer = dom.querySelector('#house');
        if(userObj.house === 'a'){
            displayContainer.textContent = 'your house choice a story here';
        } else if(userObj.house === 'b') {
            displayContainer.textContent = 'your house choice b story here!';
        } else if(userObj.house === 'c') {
            displayContainer.textContent = 'your house choice c story here';
        } else {
            displayContainer.textContent = 'your house choice d story here.';
        }
        return dom;
    }
}
