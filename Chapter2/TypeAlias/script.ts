type addable = number | string;

function add(arg1: number | string,arg2: addable){
    if(typeof arg1 === 'number' && typeof arg2 === 'number'){
        return arg1+arg2;
    }
    if(typeof arg1 === 'string' && typeof arg2 === 'string'){
        return arg1+arg2;
    }
    return;
}

console.log(add(4,6));
console.log(add('Test',' String'));
