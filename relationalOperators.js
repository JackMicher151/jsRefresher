console.log("5 > 6");
// 5 > 6 (false)
console.log(5 > 6);

let data = 7 > 6;

console.log("7 > 6 as 'data' variable");
// 7 > 6 (true)
console.log(data);

let lessthandata = 6 <= 6;

console.log("6 <= 6 as 'lessthandata' variable")
// 6 <= 6 (true)
console.log(lessthandata);

let pwebis = 7;
let poubis = 8;

let vardatastuff = pwebis > poubis;

console.log("pwebis > poubis variable comparison");
// variables pwebis > poubis (false)
console.log(vardatastuff);

let word1 = "Doge";
let word2 = "Quoge";

console.log(word1 + " < " + word2);
// Q is higher in the ASCII value than D so this would be false
console.log(word1 < word2);

word1 = "Pen";
word2 = "Pencil";

console.log(word1 + " < " + word2);
// Pen has less value than Pencil (true)
console.log(word1 < word2);

let varchar = "3";
let varnum = 3;

console.log("varchar == varnum (type coercion will happen)");
// Type coercion, losely typed langauge allows this to be true despite different types
console.log(varchar == varnum);

console.log("varchar === varnum (Strict equality operator)");
// Strict equality operator is ===, will make comparison between char and num false
console.log(varchar === varnum);

let x = '';
let y = false;

console.log("'' == false (type coercion will happen)");
// Type coercion, losely typed langauge allows this to be true despite different types
console.log(x == y);

console.log("x === y (Strict equality oeprator)");
// Strict equality operator is ===, will make comparison between '' and false output false
console.log(x === y);

// == will only check the data of two values and try to compare both despite differing types
// === will check both type and data of the two values and will output false if any of the two are different