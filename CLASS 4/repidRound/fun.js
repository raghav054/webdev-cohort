Object.prototype.chai = function(){             // here we add property chai in object 
    console.log("chai aur code");
}

const tea = {
    name: 'ice tea, lemon',
    type: 'cool'
}

tea.chai()

const myTeas = ['lemon tea', 'orange tea']
myTeas.chai()                                                 //inheritance