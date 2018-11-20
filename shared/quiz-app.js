import html from '../html.js';
import Answer from './answer.js';
import userApi from '../result-api';

function makeTemplate(quiz) {
    return html`
        <div class="question">
            <h2>${quiz.title}</h2>
        </div>

        <div class="choices">
            <form></form>
        </div>
    `;
}

export default class QuizApp {  
    constructor(quiz) {
        this.quiz = quiz;
    }  

    render() {
        const dom = makeTemplate(this.quiz);

        let form = dom.querySelector('form');
        
        this.quiz.answers.forEach(answer => {
            const answerComponent = new Answer(answer);
            form.appendChild(answerComponent.render());
        });

        const user = userApi.get();

        form.addEventListener('change', () => {
            user[this.quiz.category] = form.elements.answer;
            // doing something like user.save() is a valid approach,
            // though not one we covered. So just pass back to api:
            userApi.save(user);
            window.location = '../MAP/map.html';
        });
        
        return dom;
    }
}