Function.prototype.describe = function(){                 // in this we made describe function under the 
                                                       //    Function.prototype
    console.log(`function name is ${this.name}`);          // here this.name represent name of current 
                                                           // function
}

function masalaChai(){};
function gingerChai(){};

function greet(name){                    // here `name` is parameter
    return `hello ${name}`;
}

greet.describe();                              // when we call this type so fun_name will print
masalaChai.describe();
gingerChai.describe();

console.log("\n");
console.log(greet("Raghav"));           // here we call greet func and "Raghav" is a argument