// primitve

let data = 8; // number
let user = "epic"; // string
// boolean
// null
// undefined
// symbol

// max safe integer value 9007199254740991 (NOT MAX VALUE)

let num1 = 102312925;
console.log(num1 * 25);
console.log("test");

let num2 = 0xf; // 15 in decimal
console.log(num2);

let num3 = 1.5e12 // 1500000000000 or 1.5^12
console.log(num3);

let num4 = 5/0; // Infinity
console.log(num4);

let num5 = -5/0; // -Infinity
console.log(num5);

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308 THE MAX VALUE

console.log(Number.MAX_VALUE * 2); // INFINITY

console.log(10505050505050505050505050505050); // 1.0505050505050505e+31

let num6 = 10505050505050505050505050505050n; // BigInt
console.log(num6);
// console.log(num6 + 1); will throw TypeError
