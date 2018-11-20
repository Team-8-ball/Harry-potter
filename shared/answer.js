import html from '../html.js';

function makeTemplate(answer) {
    return html`
        <label for="choice-${answer.value}">
            <input 
                type="radio" 
                id="choice-${answer.value}" 
                name="answer" 
                value="choice-${answer.value}" 
                required
            >
            ${answer.value.toUpperCase()}.  ${answer.prompt} 
        </label>
    `;
}

export default class QuizApp {  
    constructor(answer) {
        this.answer = answer;
    }  

    render() {
        return makeTemplate(this.answer);
    }
}