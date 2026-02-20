(function (){                         // Defines and immediately invokes an anonymous IIFE.
    console.log('Raghav');
    console.log('This is a local variable');
})()


(function name(){                      // Defines and immediately invokes a named IIFE
    console.log('Raghav');
})()



(function (){                          // Defines an anonymous function but does not invoke it.
    console.log('Raghav');
})








// line 1 to 3 is called IIFE function
// The function is wrapped in parentheses (function() { ... }), followed by () to immediately invoke it.
// Immediately Invoked Function Expressions (IIFE) are JavaScript functions
// that are executed immediately after they are defined.
// They are typically used to create a local scope for variables
// to prevent them from polluting the global scope.