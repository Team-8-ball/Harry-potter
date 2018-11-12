import html from '../html.js';

function makeTemplate() {
    return html `
    <div id="input-section"> 
        <form class="sign-in"> 
        <p>
        <label for="name">User:</label>
        </p>
        <input name="name" id="name" placeholder="Muggle Name">
        <button> Start!</button>

        </form>
    </div>
    `;
}
export default class InputName {
    constructor(onSignIn) {
        this.onSignIn = onSignIn;
    }


    render() {

        const dom = makeTemplate();
        const form = dom.querySelector('.sign-in');
        const elements = form.elements;

        form.addEventListener('submit', event => {
            event.preventDefault();
  

            const user = {
                name: elements.name.value
            };
            this.onSignIn(user);

            window.location.replace('../MAP/map.html');

            console.log('This is the user`s name', user.name);
        });

        return dom;   

    }
}