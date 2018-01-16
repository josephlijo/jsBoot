// IIFE (Immediately Invoked Function Expression)
(function() {
    var a = b = 30;
    console.log(a);
    console.log(b);
})();

console.log(a); // Reference error / undefined
console.log(b); // 30

/* 
 * var a = b = 3;
 * is evaluated as: 
 *      b = 3;
 *      var a = b;
 * As a result b becomes a global variable and a becomes a local scoped variable
 */