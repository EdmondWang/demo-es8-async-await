const axios = require('axios');

const getProfile = async () => {
    return {
        name: 'edmond',
        age: 28,
    };
};

const getStat = async () => {
    try {
        await axios.get('http://Iamonetrue404');
    } catch (err) {
        return Promise.reject(err);
    }
};

const getUser = async () => {
    return Promise.all([getProfile(), getStat()]);
};

getUser().then((val) => {
    console.log(`then: ${val}`);
}).catch((err) => {
    console.log(`catch: error`);
});

// console.log(`Out of then: ${getUser()}`);