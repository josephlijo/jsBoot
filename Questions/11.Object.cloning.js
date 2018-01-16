var obj = {
    name: "Bond, James Bond",
    age: NaN
};

// Cloning object
var obj1 = Object.assign({}, obj);
obj1.age = 2;
console.log(obj.age); // NaN
console.log(obj1.age); // 2

// Creating a new object from existing
var obj2 = Object.create(obj);
obj2.age = 3;
console.log(obj.age); // NaN
console.log(obj2.age); // 3
