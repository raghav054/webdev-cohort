//PROBLEM(1): create an object representing a type of tea with properties for name,type, and caffeine

const typeOfTea = {
    name: 'Herbal tea',
    type: 'Ntural',
    isCaffeinated: 'No'
}


const teas = {                                //This means the reference to the object cannot be reassigned
    name: 'Lemon tea',                        // (you cannot do teas = {} or assign a new object to teas).
    'tea type': 'Green',
    caffine: 'low'
}

//PROBLEM(2): Access the name and print the name and type properties of the tea object.

console.log(typeOfTea.type);
console.log('\n');
console.log(teas.type);
console.log(teas['tea type']);                    // for accessing properties with space
console.log('\n'); 


//PROBLEM(3): Add new proerty origin to the tea object

teas.origin = 'Assam'                        // the properties inside the object can be modified, added, or deleted            
                                             // because objects are mutable in JavaScript.
console.log(teas);
console.log('\n');


//Object.freeze(teas);                    // you use this to make it truly immutable.
                                    // Prevents the modification of existing property attributes and values, and prevents the addition of new properties
teas.healthy = 'not harm' 
console.log(teas);
console.log('\n');


//PROBLEM(4): Change the caffine level of tea object to 'Medium'

teas.caffine = 'Medium'
console.log(teas);
console.log('\n');

//PROBLEM(5): remove the origin properties from the tea object

delete teas.origin
console.log(teas);
console.log('\n');


//PROBLEM(6): check if the tea obj has a property origin

console.log('origin' in teas);                          //we can do by also => has on property or use case statement
console.log('\n');


//PROBLEM(6): use a for...in loop to print all properties of the tea object 
                                        // it is object fraindly loop it is used to iterate over the properties (keys) of an object.

for(let key in teas){                                       // key → Represents the property name (key) of the object.
    console.log(key + ':' +teas[key])                       // object → The object whose properties you want to iterate over.

    console.log(`${key}: ${teas[key]}`);                     // using string interpolation
    console.log('\n');
}
console.log('\n');


// PROBLEM(6): create a nested obj representing different type of teas and their properties

const myTeas = {
    greenTea: {
        name: 'Green tea',
        cups: {
            one: '1',
            two: '2'
        }
    },
    blackTea: {
        name: 'black tea'
    }
}

console.log(myTeas.blackTea.name);
console.log('\n');


// create a copy of the tea1 object

// const anotherCopy = myTeas     // it is a reference passing
// console.log(anotherCopy);
// console.log('\n');

// const myCopy = {...myTeas}        // shallow copy
// console.log(myTeas);
// console.log(myCopy);
// console.log('\n');

// myCopy.greenTea.cups.two = 4;
// console.log(myTeas);
// console.log(myCopy);
// console.log('\n');

const myTeasKaString = JSON.stringify(myTeas);
const myCopy2 = JSON.parse(myTeasKaString);
console.log(myTeas);
console.log(myCopy2);
console.log('\n');

myCopy2.greenTea.cups.two = 5;

console.log(myTeas);
console.log(myCopy2);
