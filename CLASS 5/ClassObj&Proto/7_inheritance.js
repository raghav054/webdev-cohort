
class A {
    funinsideA(){
        return 'i am the best'
    }
}

class B extends A {               // using extend keyword we inherite B in A
    funinsideB(){
        return 'i can do anything'
    }
}

const p = new B();

// B.prototype = A.prototype

console.log(p.funinsideB());
console.log(p.funinsideA());