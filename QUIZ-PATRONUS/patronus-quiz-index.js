console.log('hello');

import PatronusApp from './patronus-quiz-app.js';

const patronusApp = new PatronusApp();

console.log('patronusApp', patronusApp);

const root = document.getElementById('root');
root.appendChild(patronusApp.render());




//added since we'll probably need them
//commented out to avoid linter errors