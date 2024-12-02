function printAll(args: string | string[]){
    if(typeof args === 'object'){
        args.forEach((a) =>{
            console.log(a);
        });
    }
    if(typeof args === 'string'){
        console.log(args);
    }
}

printAll("Sunny");
printAll(['ABC','XYZ']);