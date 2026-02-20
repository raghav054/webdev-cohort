// write pollyfill for .map

// const strings = ['Ram', 'Raghav', 'Anshu'];

// signature .filter
// input: userfunction, 
// return? -> always return true condition, New Array, each element iterate, userfunction
// agar user ka function true return karta hai to current value ko newArray me include kar leta hai

const arr = [1, 2, 3, 4, 5]

if(!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (userFunc) {
        const result = [];
        for(let i = 0; i < this.length; i++){
            const value = userFunc(this[i], i)
            if(value){
                result.push(this[i]);
            }
        }
        return result;
    }
}





const n = arr.myFilter( (item) => item > 2 );
const n2 = arr.myFilter( (e) => e % 2 == 0 )

console.log(arr);
console.log(n);
console.log(n2);



