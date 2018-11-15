import html from '../html.js';

function makeTemplate() {
    return html `
        <div id="text-section"> 
            <h1> NOT TODAY YOUNG WIZARD</h1>
        </div>
        <div>
            <a id="back-button" href="../ABOUT-US/about-us.html"><button>Go Back</button></a>
            <img id="fire" src="../ASSETS/fire-cup.gif">
        </div>
         
        
    `;
}
export default class CastName {

    render() {
        const dom = makeTemplate();

        return dom;   
    }

}