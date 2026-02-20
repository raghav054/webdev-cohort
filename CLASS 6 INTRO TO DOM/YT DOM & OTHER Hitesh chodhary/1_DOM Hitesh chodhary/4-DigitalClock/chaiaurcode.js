const clock = document.getElementById('clock');   // select id from html
setInterval(function() {                // for each interval showing functionality
    let date = new Date();    // for selecting date
    // console.log(date);
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString()   // for selecting time
}, 1000)