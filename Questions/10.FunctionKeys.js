var a = function() {
    console.log("I am function a");
    this.hello = function() {
        console.log("Hello");
        return 2;
    }
};

var b = function() {
    console.log("I am function b");
}

var c = function() {
    console.log("I am function c");
}

console.log(a); // [Function: a]
console.log(b); // [Function: b]

a[b] = 332; 
a[c] = 442; 
a.b = 1;
a.c = 2;
console.log(a[b]); // 332
console.log(a[c]); // 442
console.log(a.b); // 1
console.log(a.c); // 2

d = new a(); // I am function a
console.log(d); // a { hello: [Function] }
console.log(d.hello); // [Function]
console.log(d.hello()); // Hello
// 2
