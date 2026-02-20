console.log("hi, i am the best");

function printChai(){
    console.log("Hello chai");
}

function bringBrushWithoutArg(){
    console.log("Hanji, le aaya brush");
}

// function bringBrush(numberOfBrush){
//     console.log("Hanji, le aaya brush", numberOfBrush);
// }
function bringBrush(numberOfBrush){
    console.log(`Hanji, le aaya ${numberOfBrush} brush`);
}

function addTwo(num1, num2){
    return num1 + num2;
}

printChai();
bringBrushWithoutArg()
bringBrush(14);
addTwo(1,1);
console.log(addTwo(2,2));
