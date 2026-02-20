let Array = [1, 4, 2, 3, 5, 6];

function sumArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

console.log(`the sum of Array is :-) ${sumArray(Array)}`);
let anotherResult = sumArray([3, 3, 2, 6, 4]);
console.log(`the another Array is :-) ${anotherResult}`);
