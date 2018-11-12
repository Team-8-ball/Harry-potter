


let resultsArray = [];

function saveResults() {
    localStorage.setItem('results', JSON.stringify(resultsArray));
}

const resultsApi = {
    add(results) {
        resultsArray.push(results);

        saveResults();
    }
};

export default resultsApi;