let num1 = 4;
let num2 = 2;

// addition
let result = num1 + num2;
console.log(result);

// division
result = num1 / num2;
console.log(result);

// modulo
result = num1 % num2;
console.log(result);

// boolean arithmetic
// false = 0
// true = 1
let bool1 = true;
let bool2 = true;
result = bool1 + bool2;
console.log(result);

// assign +3 (= 7)
num1 = num1 + 3;
console.log(num1);

// shorthand +3 (= 10)
num1 += 3;
console.log(num1);

// increment num1
num1++;
console.log(num1);

// decrement num1
num1--;
console.log(num1);

// post increment (first fetch then assign) (num1 will still be 11 after operation)
let x = num1++;
console.log(x, num1);

// pre increment (assign then fetch)
x = ++num1;
console.log(x, num1);

// multiplication
let y = 5;
console.log(5 * 5);

// exponent
console.log(5 ** 3);