function add(a, b){                 // it is called function declaration
    return a+b;
}


const subtract = function(a, b){     // it is called function expression
    return a-b; 
}


const multiply = (a, b) => a*b           // it is called Arrow fun



console.log(add(5, 10));
console.log(subtract(5, 10));
console.log(multiply(5, 10));
