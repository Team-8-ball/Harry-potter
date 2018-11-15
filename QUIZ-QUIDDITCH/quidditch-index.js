import QuidditchApp from './quidditch-quiz-app.js';

const quidditchApp = new QuidditchApp();
const root = document.getElementById('root');
root.appendChild(quidditchApp.render());