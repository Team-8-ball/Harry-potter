import html from '../html.js';
import resultsApi from '../result-api.js';

var apiData = resultsApi.getAll();
var userObj = apiData[0];
console.log('dataAPI', userObj);


function makeTemplate() {
    return html`
    <div id="">Test!</div>
    `;
}

if(userObj.house === 'a'){
    
} else if(userObj.house === 'b') {
    
}

export default class DisplayText{

    render() {
        const dom = makeTemplate();
        return dom;
    }
}
