let getProfile = async () => {
    return {
        name: 'edmond',
        age: 28
    };
};

let getUser = async () => {
    return getProfile();
};

getUser().then((profile) => {
    console.log(`In the then: ${profile}`);
});

console.log(`out of then: ${getUser()}`);