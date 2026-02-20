/* reduce */


const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

// in the accumulator first time go value of initial value and after sum of acc and currvalue

//console.log(sumWithInitial);
// Expected output: 10

// reduce(callbackFn)
// syntex => reduce(callbackFn, initialValue)


myNums = [12, 6, 5, 8, 4];

const newNums = myNums.reduce( (acc, curr) => (acc + curr), 0);

console.log(newNums, '\n');

const totelNum = myNums.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;

}, 0)

console.log(totelNum, '\n');




const shoppingCart = [
    {
        itemName: 'js course',
        price: 2999 
    },
    {
        itemName: 'py course',
        price: 999 
    },
    {
        itemName: 'mobile dev course',
        price: 5999
    },
    {
        itemName: 'data Science course',
        price: 12999 
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0);

console.log(totalPrice);

