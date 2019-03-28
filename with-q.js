const Q = require('q');

const setup = () => {
    return Q.Promise((resolve, reject) => {
        // resolve({
        //     name: 'fromq',
        // });
        reject('errq');
    });
};

setup().then((obj) => {
    console.log(`then: ${JSON.stringify(obj)}`);
}).fail((err) => {
    console.log(`fail: ${JSON.stringify(err)}`);
});