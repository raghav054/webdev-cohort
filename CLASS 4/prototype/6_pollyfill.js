const fun = [1, 2, 3, 4, 5]

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(callback){
        const newArray = [];
        for(let i = 0; i < this.length; i++){
            const value = callback(this[i], i);       // callback return values to the value variable
            newArray.push(value);
        }
        return newArray;
    }
}

const n = fun.map(function (value, index){
    return value * 2
});

const n2 = fun.myMap((e, index) => index == 1 ? e * 3 : e);

console.log(n);
console.log(fun);
console.log(n2);



// .map
// .filter
// .reduce
// important follyfill
