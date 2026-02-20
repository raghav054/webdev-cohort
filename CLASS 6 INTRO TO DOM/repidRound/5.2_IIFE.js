
const counter = (function (){                // counter is a variable in this assign return(object_name){} so it has become obj
    let count = 0;                   
    return{                             // it is a object without name
        increment: function(){             // it is increment function
            count++;           
        },

        decrement: function(){
            count--;
        },

        getCount: function(){                // it return the current value of count 
            return count;
        }
    };
})()                                        //()() --> first is IIFI and second is it's call

counter.increment();  //1
counter.increment();   //2
counter.increment();   //3
console.log(counter.getCount());
