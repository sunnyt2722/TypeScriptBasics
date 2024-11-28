function add(num1: number,num2: number){
    return num1+num2;
}

const a1=2;
const a2=3;
const r1 = add(a1,a2);
console.log(r1);
console.log(typeof r1);


function concatinateStrings(str1:string, str2:string){
    return str1+str2;
}

const firstName = "Sunny";
const lastName = "Kumar";
console.log("Name is : "+concatinateStrings(firstName,lastName));

function check(arg:number){
    if(arg>2){
        return false;
    }
    else{
        return true;
    }
}

console.log(check(3))