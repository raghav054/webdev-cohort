let Array = [1, 3, 5, 7, 9, 11];

function sumArray(numbers){
    let sum = 0;
    for(let h = 0; h < numbers.length; h++){
        sum += numbers[h];
    }
    return sum;
}

console.log(`The totle some of array is ${sumArray(Array)}`);
let anotherArray = sumArray([2, 4, 6, 8])
console.log(`The totle some of array is ${anotherArray}`);
