let x = 7, y = 8, z = 9;


// (x < y) AND (x < 7), will be true
let result = x < y && x < z;

console.log(result);

// Will always be the opposite boolean value of result
console.log(!result)

// && is AND
// || is OR
// Preceding boolean value with ! results in NOT