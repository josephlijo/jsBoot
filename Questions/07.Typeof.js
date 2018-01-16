function checkType(input) {
    console.log(typeof input);
}

// null is of type "object" in JavaScript
// Other types are:
// object
// function 
// string
// number 
// boolean
// undefined
// symbol

checkType({}); // object
checkType(function(){}); // function
checkType(Object); // function
checkType([]); // object
checkType(null); // <-------------- object
checkType(1); // number
checkType("hello"); // string
checkType(Function); // function
checkType(false); // boolean
checkType(Symbol); // function
checkType(undefined); // undefined
checkType(foo); // <-------------- undefined ; if the below is present. 
var foo;
checkType(null); // <-------------- object
checkType(Symbol(88));