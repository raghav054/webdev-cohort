// *PROTOTYPE INHERITANCE*

// USING PROTOTYPE DO INHERITANCE

// but this not right method

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

obj2.__proto__ = obj1;                // obj2 ka proto obj1 me assign kar diya 
// obj2 will search getFullName fun in properties of obj2 then his proto that is obj1
// yes, in obj1 has getFullName so it will run
//obj2.__proto__.__proto__.__proto__ = null;
console.log(obj1.getFullName());
console.log(obj2.getFullName());
console.log(obj2.toString());      // it is present in proto of obj1, yes it will run
