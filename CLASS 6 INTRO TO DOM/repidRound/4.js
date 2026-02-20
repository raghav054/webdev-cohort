
// function onef(){
//     let myName = createCounter()
// }
// console.log(myName);           // here myName is a local variable so we can't access outside the fun










function createCounter(){
    let count = 0;                   // count is a local variable
    return function(){               // The inner function is returned (but not executed yet)
        count++;
        return count;
    }
}

const counter1 = createCounter()                   //  function(){} assign in counter 1
console.log(counter1);                           // so function(){} = [Function (anonymous)] will print






function createCounter(){
    let count = 0;
    return function(){                      // The inner function is returned (but not executed yet)
        count++;
        return count;
    }
}

const counter2 = createCounter()            //  function(){} assign in counter 2
console.log(counter2());                    // counter2() which means calling the inner function, which is 1
                                            // counter2() is call, which executes the inner function.
console.log(createCounter()());




// it is called  tippen concept 
// here [Function (anonymous)] can access variable (count) of his parent.
// hence we can access to the count variable by calling  
