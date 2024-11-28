let array:number[] = [345,35,53,422];
console.log(array);

function printArray(arr:number[]){
    console.log(arr);
}
printArray(array);

function printTuple(tpl: [number,number,number]){
    console.log(tpl);
}

let tpl:[number,number,number]=[27,25,45];

printTuple(tpl);