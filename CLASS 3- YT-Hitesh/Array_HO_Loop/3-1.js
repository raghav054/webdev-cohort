/* for in */



// for (key in object) {
//     // code block to be executed
//   }


//   The for in loop iterates over a person object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// The value of the key is person[x]

const person = {fname: "Raghav", lname: "gautam", age: 21}

for(const x in person){
    const element = person[x];
    //console.log(element);
    
}


// const number1 = [12, 23, 34, 45]

// for (const x in number1) {
//         console.log(x);
// }

const number = [12, 23, 34, 45]

for (const x in number) {
    if (Object.prototype.hasOwnProperty.call(number, x)) {
        const element = number[x];
        console.log(element);
    }
}



// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x];
// }


// Do not use for in over an Array if the index order is important.

// The index order is implementation-dependent, and array values may not be accessed in the order you expect.

// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.