import html from './html.js';
import resultsApi from './result-api.js';

function makeTemplate() {
    return html `
    <span> 
        <form class="sign-in"> 
            <p><label for="name"></label></p>
            <input name="name" id="name" placeholder="Muggle Name" required>
            <button>Start!</button>
        </form>
    </span>
    `;
}
export default class InputName {
    render() {

        const dom = makeTemplate();
        const form = dom.querySelector('.sign-in');
        const elements = form.elements;

        form.addEventListener('submit', event => {
            event.preventDefault();
  
            const user = {
                name: elements.name.value,
            };
            // 1) save the data before navigating away to new page
            // 2) Why is the user name being saved to a "results" api? 
            // Work to improve naming...
            resultsApi.add(user);

            // did you mean to use `replace`?
            // This makes it so you can not go "back" in the browser
            // window.location.replace('../MAP/map.html');
            window.location = '../MAP/map.html';
        });

        return dom;   
    }
}