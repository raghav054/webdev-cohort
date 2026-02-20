// create polyfill of FILTER fun
// signature --> Return new Array | input: userFn,
// Agar user ka function true return karta hai to current value ko new Array me include kar leta hai

const jac = [1, 2, 3, 4, 5, 6]

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFn){
        const newArray = [];
        for(let i = 0; i < this.length; i++){
            if(userFn(this[i])){                        // give current value to the userFunction
                newArray.push(this[i]);
            }
        }
        return newArray;
    }
}

const h1 = jac.filter((e) => e % 2 == 0);
const h2 = jac.myFilter(function(value){
    if(value % 2 !== 0){
        return value;
    }
})
const h3 = jac.myFilter((e) => e % 3 == 0);

console.log(jac);
console.log(h1);
console.log(h2);
console.log(h3);








// if(!Array.prototype.myFilter) {
//     Array.prototype.myFilter = function (userFunc) {
//         const result = [];
//         for(let i = 0; i < this.length; i++){
//             const value = userFunc(this[i], i)
//             if(value){
//                 result.push(this[i]);
//             }
//         }
//         return result;
//     }
// }






// if(!Array.prototype.myFilter){
//     Array.prototype.myFilter = function(userFn){
//         const newArray = [];
//         for(let i = 0; i < this.length; i++){
//             if(this[i] % 2 !== 0){
//                 const values = userFn(this[i], i);
//                 newArray.push(values);
//             }
//         }
//         return newArray;
//     }
// }



