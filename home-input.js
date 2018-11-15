import html from './html.js';
import resultsApi from './result-api.js';

function makeTemplate() {
    return html `
    <span> 
        <form class="sign-in"> 
        <p>
        <label for="name"></label>
        </p>
        <input name="name" id="name" placeholder="Muggle Name" required>
        <button> Start!</button>

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

            window.location.replace('../MAP/map.html');

            console.log('This is the user`s name', user);

            resultsApi.add(user);
        });

        return dom;   

    }
}