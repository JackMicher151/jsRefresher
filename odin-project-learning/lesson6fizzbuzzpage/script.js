function fizzbuzz(num) {
    let rstr = '';
    if (num % 3 === 0) {
        rstr.concat('Fizz');
    }
    if (num % 5 === 0) {
        rstr.concat('Buzz');
    }
    return rstr;
}

document.querySelector('button.butt1').addEventListener("click", () => {
    alert(fizzbuzz(document.querySelector("input.epic").value));
})