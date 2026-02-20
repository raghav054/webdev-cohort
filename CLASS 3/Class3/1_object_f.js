// copy of object in nested object


let p3 = {
    fname: 'Raghav',
    lname: 'gautam',
    age: 21,
    address: {
        h: 1,
        s: 2
    }
}

let p4 = {  
    ...p3,                              
    address: {
        ...p3.address
    }                                                       // spread operatop doesn't work on inner object it copy on 1st leval thing
}                                                            // in this copy will call by reference                      
console.log(p3);
console.log(p4);
console.log('\n');

p4.fname = 'Akshay';           
p4.lname = 'kharol';
p4.address.h = 5;

console.log(p3);
console.log(p4);

console.log('\n');
console.log('with the help of DEEP COPY using spread operator but is not perfect method -->\n');




let p5 = {
    fname: 'Raghav',
    lname: 'gautam',
    age: 21,
    address: {
        h: 1,
        s: 2
    }
}

const p5KaString =  JSON.stringify(p5);                        // using deep copy p5 convert in string and string convert in p6
console.log(p5KaString);
let p6 = JSON.parse(p5KaString);

console.log('\n');
console.log(p5);
console.log(p6);
console.log('\n');

p6.fname = 'Akshay';           
p6.lname = 'kharol';
p6.address.h = 5;

console.log(p5);
console.log(p6);