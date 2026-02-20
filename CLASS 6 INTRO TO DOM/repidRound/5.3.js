
// without IIFI we can use use this method

function tyum(){
    let count = 0;
    return{
        increment: function(){
            count++;           
        },

        decrement: function(){
            count--;
        },

        getCount: function(){
            return count;
        }
    };
}

const counter = tyum();
// counter();
counter.increment();  //1
counter.increment();   //2
counter.increment();   //3
console.log(counter.getCount());
// console.log(counter());