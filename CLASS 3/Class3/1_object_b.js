// take eg of real world entity and explain its properties by objects

const remote = {
    color: 'Black',
    brand: 'xyz',
    dimentions: {height: 2, width: 4},                          // another object
    turnOff: function(){
        return 'off the TV';
    },
    turnOn: function(){
        return 'on the TV';
    }
}
console.log(remote.dimentions.height);
console.log(remote.turnOn());
