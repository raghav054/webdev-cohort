// DOM -> document oject model

// dom manupulaton => change the html page dynamically

/* window is a global object which is provided by js engine under only browser not node.js
and func under window helps for accessing the functionality of browser

window obj, alllow for the interaction with our browser window 
under window obj have different type of obj & function those provide different type of functionality

window.documennt obj point(access) to the html page
using document we can manupilate the html page
    
 */

console.log(window);

// document.writeln('Hello from js')


function changeBackgroundColors(color) {
    document.body.style.backgroundColor = color
}





