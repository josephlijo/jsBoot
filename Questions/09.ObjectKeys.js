var a = {};
var b = {
    key1: "value1"
};
var c = {
    key2: "value2"
};

console.log(a); // {}
console.log(a[b]); // undefined (since it is not defined)

a[b] = 3; // Here a[b] become a[object Object] since JavaScript will stringify the value 
a[c] = 32; // a[c] becomes a[object Object]
console.log(a[b]); // will be 32 because it takes the last one a[object Object] which is 32, not 3