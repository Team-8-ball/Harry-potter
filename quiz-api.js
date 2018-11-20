
const quizzes = {
    career: {
        category: 'career',
        title: 'What will you use your magic for?',
        questions: [
            {
                value: 'a',
                prompt: 'After what happened to the Potter family, I have to protect the muggles.'
            },
            {
                value: 'b',
                prompt: 'Share my interest of the complexity and depth of wizardry with the world!'
            },
            {
                value: 'c',
                prompt: 'The world is large and the night full of terrors. I want to know EVERYTHING that other people are doing in the scene!'
            },
            {
                value: 'd',
                prompt: 'Being a wizard is great and all but the real magic happens in the democratic process.'
            },
        ]
    },
    house: { /*... */ },
    patronus: { /*... */ },
    // etc...
};

export default {
    get(category) {
        return quizzes[category];
    }
};