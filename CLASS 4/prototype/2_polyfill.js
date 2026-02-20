const arr = [1,3,5]

// if(!Array.prototype.Fill) throw new Error('please update your browser')

if(!Array.prototype.Fill){
    // Fallback --> polyfill --> backup Function
    Array.prototype.Fill = function(){
        console.log('Fill() method has been added in obj');
    }
}
arr.Fill()