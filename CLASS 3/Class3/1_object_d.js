// i want to copy actual object so how ?

let p1 = {
    fname: 'Raghav',
    lname: 'gautam',
    age: 21
}

let p2 = {                                 // we make another object (take diff address) in heap and past the copy of p1 in p2 
    fname: p1.fname,                       // both are different obj but shape (values) are same
    lname: p1.lname,                              
}                                        // in this it showing diff-diff location
console.log(p1);
console.log(p2);
console.log('\n');

p2.fname = 'Akshay';                              // if we change in p2 so it won't any changes in p1
p2.lname = 'kharol'
console.log(p1);
console.log(p2);

console.log('\n');
console.log('use Spread Operator -->\n');



// if i want to copy object of 1000 key value than



let p3 = {
    fname: 'Raghav',
    lname: 'gautam',
    age: 21
}

let p4 = {                                 // we make another object (take diff address) in heap and past the copy of p1 in p2 
    ...p3                                 //spread operator
}                                        // in this it showing diff-diff location
console.log(p3);
console.log(p4);
console.log('\n');

p4.fname = 'Akshay';                              // if we change in p2 so it won't any changes in p1
p4.lname = 'kharol'
console.log(p3);
console.log(p4);
