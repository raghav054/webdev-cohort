let p1 = {
    fname: 'Raghav',
    lname: 'gautam',
    age: 21,
    address: {
        h: 1,
        s: 2
    }
}

let p2 = {                                
    fname: p1.fname,                    
    lname: p1.lname,  
    address: p1.address                           // here address will copy, pass by reference (see 1_object_c)                 
}                                                 // means for address it copy pass by reference but we want to copy object                          
console.log(p1);
console.log(p2);
console.log('\n');

p2.fname = 'Akshay';           
p2.lname = 'kharol';
p2.address.h = 5;

console.log(p1);
console.log(p2);

console.log('\n');
console.log('using spread operator-->\n');




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
    ...p3                                                       // spread operatop doesn't work on inner object it copy on 1st leval thing
}                                                            // in this copy will call by reference                      
console.log(p3);
console.log(p4);
console.log('\n');

p4.fname = 'Akshay';           
p4.lname = 'kharol';
p4.address.h = 5;

console.log(p3);
console.log(p4);
