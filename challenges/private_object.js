const username = Symbol('username');
const password = Symbol('password');

const user = {
    [username]: 'privateuser',
    [password]: '12345',
    age: 22
};

console.log(user.username);
console.log(user.password);
