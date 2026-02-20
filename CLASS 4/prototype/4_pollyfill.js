// create polyfill of .map fun
// signature . map --> 
// Return ? --> New Array, Each ele Iterate userFn

const fun = [1, 2, 3, 4, 5]

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn){
        const newArray = [];
        for(let i = 0; i < this.length; i++){
            const value = userFn(this[i], i);       // userFn return values to the value variable
            newArray.push(value);
        }
        return newArray;
    }
}

const n = fun.map(function (value, index){
    return value * 2
});

const n2 = fun.myMap(e => e * 3);

console.log(n);
console.log(fun);
console.log(n2);