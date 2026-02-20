/* forEach loop */

// syntex :=> array.forEach(function(currentValue, index, arr), thisValue)

// function() -->	Required.
// A function to run for each array element.

// currentValue -->	Required.
// The value of the current element.

// index -->	Optional.
// The index of the current element.

// arr -->	Optional.
// The array of the current element.

// thisValue -->	Optional. Default undefined.
// A value passed to the function as its this value.


const coding = ['js', 'cpp', 'rb', 'java', 'python', 'cpp'];

coding.forEach( function (val) {
    //console.log(val);
    
} )

coding.forEach( (val) => {
    //console.log(val);
} )



const numbers = [34, 56, 89, 62, 41];

numbers.forEach(myFun);                // myFun is callback function

function myFun (item, index, arr) {      // item, index, arr :=> parameter
    arr[index] = item * 10;
    //console.log(item);
}

console.log(numbers);


// forEach() iterates through each element of the array

// The callback function receives the current element, its index, and the original array

// The original array is modified directly (mutated)

// forEach() doesn't return a new array (unlike map())



function printMe (item) {
    console.log(item);
    
}

coding.forEach(printMe);          // printMe, passes as a parameter

coding.forEach( (item, index, arr) => {
    //console.log(item, index, arr);
} )



console.log('\n');


const myCoding = [ 
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
 ];


myCoding.forEach( (item) => {
    console.log(item.languageName);
} )