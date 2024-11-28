function foo(args:any){
    if(args)
       console.log('has value : ',args);
    else
        console.log('is undefined ',args);
    return;
}

let a : number | undefined = undefined;
foo(a);

let b="Sunny"
foo(b)