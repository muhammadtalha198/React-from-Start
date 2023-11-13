
//Pass a function as a variable to another function.

function sayHello(){
    return "Hello World";
}

function greet(fnMessagge){
    console.log(fnMessagge());
}

//pass as a reference by passing just name of the variable without the "()".
greet(sayHello);
