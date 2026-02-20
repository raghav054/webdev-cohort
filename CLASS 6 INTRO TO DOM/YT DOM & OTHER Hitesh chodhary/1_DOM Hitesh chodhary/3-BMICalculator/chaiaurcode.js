const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);  // forget # for id
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');       // same mistake

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `please enter valid height ${height}`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please enter valid weight ${weight}`
    }else{
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);      // did mistake in formula
        result.innerHTML = `<span>${BMI}</span><br>`
        if(BMI > 24.9){
            result.innerHTML += 'Range is Over Weight';           // learn += use
        }
        else if(BMI < 18.6){
            result.innerHTML += 'Range is Under Weight';
        }else{
            result.innerHTML += 'Normal Range';
        }
    }
    
})