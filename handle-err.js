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
        Promise.reject(err);
    }
};

const getUser = async () => {
    return Promise.all([getProfile(), getStat()]);
};

getUser().then((val) => {
    console.log(`In the then: ${val}`);
}).catch((err) => {
    console.log(`Hi Edmond, one error has been found: ${err}`);
});

console.log(`Out of then: ${getUser()}`);