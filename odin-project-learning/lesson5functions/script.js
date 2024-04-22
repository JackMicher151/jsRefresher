function add7 (num) {
    return num + 7;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function capitalize (strng = '') {
    let str1 = strng.substring(0,1);
    let str2 = strng.substring(1);
    str1 = str1.toUpperCase();
    str2 = str2.toLowerCase();
    return str1 + str2;
}

function lastLetter (strng) {
    return strng.slice(-1);
}

document.querySelector(".func1").innerText = add7(3);
document.querySelector(".func2").innerText = multiply(7,5);
document.querySelector(".func3").innerText = capitalize("pWeBiS");
document.querySelector(".func4").innerText = "Button below gives alert of last letter in of string above";

document.querySelector("button.chungus").addEventListener('click', () => {
    alert("Last letter: " + lastLetter(document.querySelector(".func3").innerText));
})