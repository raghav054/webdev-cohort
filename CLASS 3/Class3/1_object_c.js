let fname = 'raghav'
let fname2 = fname;               // fname2 me fname ki copy ker do ( = (assignment) operator)
                                  // pass by value
console.log(fname);
console.log(fname2);

console.log('\n');

fname2 = 'Akshay'                         // after changing fname2 so fname won't change
console.log(fname);
console.log(fname2);

console.log('\n');





const p1 = {                                  // p1 is a obj so it's address store in stack and store memory in heap
    fname: 'Akshay'
}
const p2 = p1;                               // we copy of address rather than the object (pass by reference)
console.log(p1);
console.log(p2);
console.log('\n');

p2.fname = 'Raghav'
console.log(p1);                                      // when we change in p2 so p1 will change
console.log(p2);                                      // this happen by memory (stack, heap)
