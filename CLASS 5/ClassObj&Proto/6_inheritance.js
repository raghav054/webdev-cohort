
class person {
    constructor(firstN, lastN){               // construction fun defines properties     
        this.fname = firstN;
        this.lname = lastN;
        console.log(this.getFullName());        //  this refer p1 & p2
        this.active = false;
    }
    getFullName(){
        return `${this.fname} ${this.lname}`;
    }

}

const p1 = new person('Raghav', 'Gautam');
const p2 = new person('Ajay', 'Gurjar');
console.log(p2.active);