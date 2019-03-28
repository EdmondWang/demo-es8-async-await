const Q = require('q');

const setup = () => {
    return Q.Promise((resolve, reject) => {
        resolve({
            name: 'fromq',
        });
    });
};

setup().then((obj) => {
    console.log(obj);
});