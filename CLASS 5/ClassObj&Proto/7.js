class A {
    constructor(fname, lname) {
      this.fname = fname;
      this.lname = lname;
    }
  
    getfullNameByA() {
      return `name using A : ${this.fname} ${this.lname}`;
    }
  }
  
  class B {
    constructor(fname, lname) {
      this.fname = fname;
      this.lname = lname;
    }
  
    getfullNameByB() {
      return `name using B : ${this.fname} ${this.lname}`;
    }
  }
  
  B.prototype = Object.create(A.prototype);
  /*so what happened is a new object is created with .__proto__ = A.prototype
  and it was trying to assign this new obj to B.prototype but the prototype property is non-writable
  means we cannot reassign B.prototype to a completely different object.
  we can verify it using */
  console.log(Object.getOwnPropertyDescriptor(B, "prototype"));
  
  /* so it was not changed
   so let's understand how we can do this, step by step
   create an object with .__proto__ = A.prototype */
  let someObj = Object.create(A.prototype);
  // now set it like this
  B.prototype.__proto__ = someObj;
  // printing everything and understand whats happening,
  console.log(B.prototype.__proto__ === someObj);
  console.log(someObj.__proto__ === A.prototype);
  console.log(B.prototype.__proto__.__proto__ === A.prototype);
  
  // or inshort we can directly do
  // B.prototype.__proto__ = Object.create(A.prototype);
  // console.log(B.prototype.__proto__.__proto__ === A.prototype);


  console.log(p.funinsideB());
console.log(p.funinsideA());