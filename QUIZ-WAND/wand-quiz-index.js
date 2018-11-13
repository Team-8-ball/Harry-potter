import WandApp from './wand-quiz-app.js';

const wandApp = new WandApp();
const root = document.getElementById('root');
root.appendChild(wandApp.render());