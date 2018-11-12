let resultsArray = [];



const resultsApi = {

    saveResults() {
        localStorage.setItem('results', JSON.stringify(resultsArray));
    },

    getAll() {
        const json = localStorage.getItem('results');
        if(json) {
            resultsArray = JSON.parse(json);
        }
        return resultsArray;
    },
    add(results) {
        resultsArray.push(results);

        this.saveResults();
    }
};

resultsApi.getAll();

export default resultsApi;