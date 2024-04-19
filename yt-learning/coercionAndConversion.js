let num = 6; // number type
console.log(num, typeof num);

num = "123" // this is a string
console.log(num, typeof num);

num = Number("123"); // explicit conversion
console.log(num, typeof num);

let x = 8;
console.log(x, typeof x);
x = x + ""; // coercion into int into string
console.log(x, typeof x);
x = x - 2; // coercion of string back into int
console.log(x, typeof x);

console.log(Boolean(0)); // false
console.log(Boolean(69)); // true
console.log(Boolean(-1)); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Epic")); // true
console.log(Boolean("")); // false

let y = parseInt("123");
console.log(y, typeof y);
y = parseInt("123 Epic");
console.log(y, typeof y);