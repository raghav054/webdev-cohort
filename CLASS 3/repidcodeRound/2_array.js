const teas = [`Green tea`, `Black tea`, `Herbal tea`, `Orange tea`, `Ginger tea`, `Oolong tea`];

console.log(teas);
console.log(`\n`);

//problem:(8) use a for loop to create a new array with all teas names in uppercase

const uppcaseTeas = [];                                             // uppcaseTeas is an array, and the toUpperCase() method works only on strings, not arrays.
for(let i = 0; i < teas.length; i++){
    uppcaseTeas.push(teas[i].toUpperCase());
}
console.log(uppcaseTeas);

console.log(`\n`);

const uppCaseTeas = [];                                             // uppcaseTeas is an array, and the toUpperCase() method works only on strings, not arrays.
for(let i = 0; i < teas.length; i++){
    let upper = teas[i].toUpperCase();
    uppCaseTeas.push(upper);
}
console.log(uppCaseTeas);
console.log(`\n`);


//problem:(9) use a for loop to find the tea name with the most character

let longestTea = "";
for(let i = 0; i < teas.length; i++){
    if(teas[i].length > longestTea.length){
        longestTea = teas[i]; 
    }
}
console.log(longestTea);
console.log(`\n`);


//problem:(10) use a for loop to reverse the order of teas in the array.

let reverseTeas = [];                                                //.push() work on only on array not string
for(let i = teas.length-1; i >= 0; i--){
    reverseTeas.push(teas[i])
}
console.log(reverseTeas);


// teas.reverse();

// console.log(teas);
