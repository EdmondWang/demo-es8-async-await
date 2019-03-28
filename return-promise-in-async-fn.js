const getProfile = async () => {
    return {
        name: 'edmond',
        age: 28,
    };
};

const getStat = async () => {
    return {
        voteUp: 2,
        voteDown: 1,
    };
};

const getUser = async () => {
    // return Promise.all([getProfile(), getStat()]);
    return Promise.resolve('completed::getUser');
};

getUser().then((val) => {
    console.log(`In the then: ${val}`);
});

console.log(`Out of then: ${getUser()}`);