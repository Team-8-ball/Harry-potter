import html from '../html.js';

function makeTemplate() {
    return html `
    <div id="text-section"> 
        <h1> NOT TODAY YOUNG WIZARD</h1>
    </div>
    `;
}
export default class CastName {


    render() {

        const dom = makeTemplate();


        return dom;   
    }

}