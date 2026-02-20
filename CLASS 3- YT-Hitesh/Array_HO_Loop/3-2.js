const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for(const key in myObject){
    //console.log(`${key} shortcut is for ${myObject[key]}`);
    
}


const programming = ["js", 'cpp', 'rb', 'swift'];

for (const key in programming) {
    // console.log(key);        // it will provide key not direct value in Array
    //console.log(programming[key]);
    
}


const map = new Map();

map.set('IN', 'India')
map.set('USA', 'United state of America')
map.set('Fr', 'France')
map.set('IN', 'India')

// console.log(map);

// for (const key in map) {
//     console.log(map);
    
// }

// for (const [key, value] in map) {     // destructure of Array -> [key, value]
//     console.log(key, ':-', value);
    
// }

// map is not iterable we have to use another method for this

// NOTE => object -> apply 'for in' loop
        // Array -> apply 'for of' loop