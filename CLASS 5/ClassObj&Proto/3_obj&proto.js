// But this not right method

const obj1 = {
    fname: 'Raghav',
    lname: 'Gautam',
    getFullName: function(){
        return `${this.fname} ${this.lname}`
    }
}

const obj2 = {
    fname: 'Hemant',
    lname: 'yadav'
}

obj2.__proto__ = obj1;
obj1.__proto__ = null;                 // here we have done null to the proto of obj1 in place of objecct
// obj2.__proto__.__proto__ = null;    // we can write also

console.log(obj1.getFullName());
console.log(obj2.getFullName());
console.log(obj2.toString());              // this fun isn't present in __proto__ of obj1
