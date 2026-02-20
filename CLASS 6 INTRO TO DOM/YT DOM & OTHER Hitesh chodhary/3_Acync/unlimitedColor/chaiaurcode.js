// create random color

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)];   // 0.9 * 16 = always less than 16 (16 * 9 = 144)
    }
    return color;
}

// console.log(Math.floor(Math.random() * 16));
// console.log(randomColor());

let intervelId;
const startBgColor =  function(){
    if(!intervelId){           // intervelId == null
        intervelId = setInterval(changeBgColor, 1000);
    }
}
const stopBgColor =  function(){
    clearInterval(intervelId)
    intervelId = null;  // edge cases
}

const changeBgColor = function(){
    document.body.style.backgroundColor = randomColor();
}

document.querySelector('#start').
addEventListener('click', startBgColor);

document.querySelector('#stop').
addEventListener('click', stopBgColor);













// step 1 => generate a random color

// step 2 => add event listener on start for changing background color and for stoping

// step 3 => use set intervel for continuous changing backgrund color

// step 4 => remove memory of variabe 
// witout intervel id = null when we click more then one on start so it won't stop