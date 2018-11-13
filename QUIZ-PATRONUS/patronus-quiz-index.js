import PatronusApp from './patronus-quiz-app.js';

const patronusApp = new PatronusApp();
const root = document.getElementById('root');
root.appendChild(patronusApp.render());