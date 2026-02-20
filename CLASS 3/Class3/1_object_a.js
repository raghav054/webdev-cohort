
const person = {
    x: 20,                                              // after the key and value we add , (simble)
    firstName: "Raghav",
    lastName: "Gautam",
    hobbies: [`coding`, `cricket`],
    lookingSmart: true,
    creative: true,
    getFullName: function(){
        return "Raghav Gautam";
    },
    address: {                                          // under the object we don't use (;)
        hno: 2,
        town: 'anta',
        state: 'Rj',
        country: 'Bharat',                          
    }
}

console.log(person.x);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.hobbies[1]);
console.log(person.lookingSmart);
console.log(person.creative);
console.log(person.getFullName());
console.log(person.address.country);
console.log(person.address.xyzz);
