// problem:(1) Creat an Array containing different types of teas
const teas = [`Green tea`, `Black tea`, `Herbal tea`, `Orange tea`, `Ginger tea`, `Oolong tea`];
console.log(teas[3]);

// problem: add Chamomile tea to the existing list of teas
teas.push(`Chamomile tea`);
console.log(teas[6]);

console.log(teas);
console.log(`\n`);


// problem:(2) remove Oolong tea from the list of teas

// const removed = teas.splice(5, 1);
// console.log(teas);

// const index = teas.indexOf(`Oolong tea`);
// const itemRemoved = teas.splice(index, 1);
// console.log(teas);

const index = teas.indexOf(`Oolong-teaRaghav`);
console.log(index);                                 // it will return -1;
console.log(`\n`);

//console.log(teas.filter(item => item != `Oolong tea`));

const teaIndex = teas.indexOf(`Oolong tea`);
if(teaIndex > -1){                                      // check 5 > -1   // index is exisist
    const itemRemoved = teas.splice(teaIndex, 1);          // howmany (1) item remove kerna hai including index teaIndex
}
console.log(teas);
console.log(`\n`);

// array.splice(index, count, item1, ....., itemX)
// index => The index (position) to add or remove items.
// Count => Optional, Number of items to be removed.
// item1, ..., => Optional, The new elements(s) to be added.



// problem:(3) Filter the list to only include teas that are caffeinated

//console.log(teas.filter(tea => tea != `Herbal tea`));

const teaCaffeinated = teas.filter(tea => tea != `Herbal tea`);            // filter() return the value when value is true
console.log(teaCaffeinated);
console.log(`\n`);


// problem:(4) Sort the list of teas in Alphabetical order
console.log(teas.sort());
console.log(`\n`);

const test = ["🐓", "🥚"] 
console.log(test.sort());                             // it is not working for me
console.log(`\n`);


// problem:(5) use a for loop to print each type of tea in the array
for(let i = 0; i < teas.length; i++){
    console.log(`At the index ${i} the tea is ${teas[i]}`);
}
console.log(`\n`);


// problem:(6) without help of loop print diff type tea
teas.forEach(allTypeTea => console.log(allTypeTea));
console.log(`\n`);


// problem:(7) use a for loop to count how many teas are caffeinated (excluding Herbal tea)
let caffeinatedTea = 0;
for(let i = 0; i < teas.length; i++){
    if(teas[i] !== "Herbal tea"){
        caffeinatedTea++;
    }
}
console.log(caffeinatedTea);
console.log(`\n`);

// const caffteas = teas.map(caffeinatedTea => caffeinatedTea !== (`Herbal tea`));
// console.log(caffteas);

