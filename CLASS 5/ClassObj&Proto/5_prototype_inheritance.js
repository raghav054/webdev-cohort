// *PROTOTYPE INHERITANCE*

// USING PROTOTYPE DO INHERITANCE

// THIS IS RIGHT METHOD


class person {
                                              // parameterized constructor
    constructor(firstN, lastN){               // firstN refer --> Raghav & lastN refer --> Gautam
        this.fname = firstN;                 // this refer  --> p1 & p2 and make fname property
        this.lname = lastN;                  // this refer  --> p1 & p2 and make lname property
    }
    getFullName(){
        return `${this.fname} ${this.lname}`;        // p1.fname = Raghav, p1.lname = Gautam
    }

}

// IT IS CALLED SYNTACTICS SUGAR
const p1 = new person('Raghav', 'Gautam');    // argument
const p2 = new person('Ajay', 'Gurjar');       // new using this person ka prototype p1 ke proto me dal diya
                                              // now we can access using p1.getfullname
console.log(p1.getFullName());
console.log(p2.getFullName());

// console.log(person.prototype);                 // both will give same result
// console.log(p1.__proto__);           // blueprint pe .prototype hota hai and actual obj pe .__proto__
// console.log(p1.getFullName());                // hence we can access this


// this.fname = firstN;    --> firstN ki value put in this.fname (current object ki fname)