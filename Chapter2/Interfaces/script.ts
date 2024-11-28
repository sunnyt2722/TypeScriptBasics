interface userInterface{
    name: string;
    age: number;
    learning: string[];
}

const user1 : userInterface= {
    name: 'Sunny',
    age: 30,
    learning: ['Playwright', 'Cypress', 'TS']
}
const user2 : userInterface= {
    name: 'Sunny',
    age: 30,
    learning: ['Playwright', 'Cypress', 'Java']
}

console.log(user1);
console.log(user2);

function printUser(user:userInterface){
    console.log(user);
    console.log(user.name);
    console.log(user.age);
    console.log(user.learning);
}

printUser(user1);
printUser(user2);