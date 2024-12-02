type User = {
    name: string;
    age: number;
    learning: string[];
}

type nationality = {
    nationality: string;
}

type userExtended = User & nationality;


const user1 : userExtended= {
    name: 'Sunny',
    age: 30,
    learning: ['Playwright', 'Cypress', 'TS'],
    nationality: 'Indian'
}
const user2 : userExtended= {
    name: 'John',
    age: 38,
    learning: ['Playwright', 'Cypress', 'Java'],
    nationality: 'British'
}

console.log(user1);
console.log(user2);

function printUser(user:userExtended){
    console.log(user);
    console.log(user.name);
    console.log(user.age);
    console.log(user.learning);
}

printUser(user1);
printUser(user2);