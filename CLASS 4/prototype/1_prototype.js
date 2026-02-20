// prototype is a object.
// in dataType.prototype has all predefined func so for child class name (arr etc) also include that function
// arr.__proto__ = Array.prototype



Object.prototype.smart = () => console.log('i am smart');   // add smart func in object base class


const arr = [1, 2, 3]

arr.fill()

const str = 'Raghav'
str.length // 6

const obj = { x: 1, length: 1}

obj.smart()