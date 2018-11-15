import html from '../html.js';

function makeTemplate() {
    return html `
    <div id="text-section"> 
        <h1> NOT TODAY YOUNG WIZARD</h1>
    </div>
    <div id="fire"> <img src="'../ASSETS/fire-cup.gif'"> </div>
    `;
}
export default class CastName {


    render() {

        const dom = makeTemplate();


        return dom;   
    }

}