import html from '../html.js';


function makeTemplate() {
    return html` 
        <h1> Hello World </h1>

    `;
}

export default class App {
    render() {
        const dom = makeTemplate();
        
        return dom;
    }
}