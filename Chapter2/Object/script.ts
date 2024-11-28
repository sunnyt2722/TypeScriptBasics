const user1 = {
    name: 'Sunny',
    age: 30,
    learning: ['Playwright', 'Cypress', 'TS']
}
const user2 = {
    name: 'Sunny',
    age: 30,
    learning: ['Playwright', 'Cypress', 'Java']
}

console.log(user1);
console.log(user2);

function printUser(user:{name:string;age:number;learning: string[]}){
    console.log(user);
    console.log(user.name);
    console.log(user.age);
    console.log(user.learning);
}

printUser(user1);
printUser(user2);