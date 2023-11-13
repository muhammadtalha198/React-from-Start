
//Higher Order Functions
// Those function those take function as an argument or return it or both 
// are called Higher order function.


function greet(fn){
    console.log(fn());
}

function sayHello(){
    return function(){
        "Hello World";
    };
}


