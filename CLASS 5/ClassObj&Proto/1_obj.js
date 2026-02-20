const obj1 = {
    fname: 'Ajay',
    getFullName: function(){
        if(this.lname !== undefined)
        return `${this.fname} ${this.lname}`;    // useing string interpolation
        return `${this.fname}`;                  // this --> here refer obj1
    }
}


const obj2 = {
    fname: 'Raghav',
    lname: 'gautam',
    getFullName: function(){
        if(this.lname !== undefined)
        return `${this.fname} ${this.lname}`;
        return `${this.fname}`;
    }
}

console.log(obj1.getFullName());
console.log(obj2.getFullName());


// if we have 20+ obj so for accessing getFullName() we have to create getFullName() function in all obj
// here at line 14 it voilate DRY (coding) principal
// DRY --> do not repeat yourself