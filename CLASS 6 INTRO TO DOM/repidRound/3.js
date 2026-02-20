// **it is called first class function**


function applyOperation(a, b, operation){      //(1) a=5, b=4, operation = (x, y) => x/y
    return operation(a, b);                //(2) call (x, y) => x/y and pass value of a and b
                                            // (4) return 1.25 to the applyOperation()
}

const result = applyOperation(5, 4, (x, y) => x/y);   //(3) (x, y) => x/y --> return 1.25 to the operation()
                                                       // (5) 1.25 store in result
console.log(result);              // here result isn't fun




// in this fun can pass by argument and return the fun
// in the parameter we treate to the any fun as a regular variable