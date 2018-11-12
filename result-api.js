let resultsArray = [];

function saveResults() {
    localStorage.setItem('results', JSON.stringify(resultsArray));
}

const resultsApi = {
    getAll() {
        const json = localStorage.getItem('results');
        if(json) {
            resultsArray = JSON.parse(json);
        }
        return resultsArray;
    },
    add(results) {
        resultsArray.push(results);

        saveResults();
    }
};

resultsApi.getAll();

export default resultsApi;