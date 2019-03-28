const Q = require('q');

const getPizza = () => {
    return Q.reject('pizza get');
};

const exec = () => {
    getPizza().then((result) => {
        console.log(result);
    });
};

exec();