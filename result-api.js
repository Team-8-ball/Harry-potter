// let resultsArray = [];
// You don't need an array, it's a user object!

const userApi = {

    get() {
        const json = localStorage.getItem('user');
        if(json) {
            return JSON.parse(json);
        }
        return null;
    },
    
    save(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }
};

export default userApi;