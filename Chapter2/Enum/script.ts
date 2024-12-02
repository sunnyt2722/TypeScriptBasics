enum Nationality{
    Indian = 'Indian',
    British = 'British',
    Other = 'N/A'
}
interface User{
    name: string;
    age: number;
    learning: string[];
}

interface extendedUser extends User{
    nationality: Nationality;
}

const user1 : extendedUser= {
    name: 'Sunny',
    age: 30,
    learning: ['Playwright', 'Cypress', 'TS'],
    nationality: Nationality.Indian
}
const user2 : extendedUser= {
    name: 'John',
    age: 38,
    learning: ['Playwright', 'Cypress', 'Java'],
    nationality: Nationality.Other
}

console.log(user1);
console.log(user2);

function printUser(user:extendedUser){
    console.log(user);
    console.log(user.name);
    console.log(user.age);
    console.log(user.learning);
}

printUser(user1);
printUser(user2);