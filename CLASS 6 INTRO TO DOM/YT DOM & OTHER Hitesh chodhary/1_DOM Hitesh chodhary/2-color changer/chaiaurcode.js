const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function (button) {
    // console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);                          // get id
        if (e.target.id === 'grey') {                   // get id name
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        }
    })

})

//(1) first we select all button class
//(2) then body
//(3) iterate each button from buttons nodeList
//(5) add event event lishner, e is a event object when click on button, func will execute
//(8) after selecting id name we can change background of body