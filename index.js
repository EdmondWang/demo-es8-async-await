'use strict';

/**
 * @method fetchData
 */
async function fetchData() {
    let str = '';
    try {
        str = 'data';
        throw new Error();
    } catch (err) {
        str = 'err';
    }
    return str;
};

const data = fetchData();

console.log(data);
