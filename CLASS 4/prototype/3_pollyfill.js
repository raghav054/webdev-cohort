// Error: .forEach function does not exist on arr variable

// Real signature --> No return , function as a input parameter(value and index)
// what he did --> call my func for every value
const arr2 = [34, 56, 78]

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFunc){
        const originalArray = this;
        for(let i = 0; i < originalArray.length; i++){
            userFunc(originalArray[i], i);
        }
    }
}

// const ret = arr2.forEach(function(value, index){
//     console.log(`value at index ${index} is ${value}`);
// })


console.log('\n');

const ret2 = arr2.myForEach(function(value, index){
    console.log(`My For Each value at index ${index} is ${value}`);
})
console.log('Ret is ', ret2);
console.log('\n');





// userfunction as a parameter(callback func) --> function(value, index){
//     console.log(`value at index ${index} is ${value}`);
// }


// const newArray = this; it is showing reference of arr2  
// this => it is dynamic context, current object (eg. -> arr) ki taraf point karta hai
// this => jis bhi array ke upper user esko call ker rha hai