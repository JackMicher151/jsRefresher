function fizzbuzz(num) {
    let rstr = '';
    if (num % 3 === 0) {
        rstr = rstr.concat('Fizz');
    }
    if (num % 5 === 0) {
        rstr = rstr.concat('Buzz');
    }
    return rstr;
}

document.querySelector('#butt1').addEventListener("click", () => {
    alert(fizzbuzz(document.querySelector("#epic").value));
})