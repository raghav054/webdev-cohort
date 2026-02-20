/* for on */

// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);      // it provide value directly in Array (for on)
    
}

const greetings = 'Hello World!'

for(const greet of greetings){
    if (greet == ' ') {
        continue;
    }
    console.log(`Each char is ${greet}`);
    
}




// for (const element of object) {
    
// }
// element => variable -> For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

// object => iterable -> An object (entity) that has iterable properties.

