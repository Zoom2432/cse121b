/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers)

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let number1 = Number(document.querySelector('#subtract1').value);
    let number2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(number1, number2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let number1 = Number(document.querySelector('#factor1').value);
    let number2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(number1, number2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

function divideNumbers() {
    let number1 = Number(document.querySelector('#dividend').value);
    let number2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(number1, number2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function () {
    const subtotal = Number(document.querySelector('#subtotal').value);
    const clubMember = document.querySelector('#member').checked;

    console.log(clubMember);

    if (clubMember) {
        document.querySelector('#total').textContent = `$ ${(subtotal - (subtotal * 0.2)).toFixed(2)}`;
    } else {
        document.querySelector('#total').textContent = `$ ${subtotal.toFixed(2)}`;
    }
})

/* ARRAY METHODS - Functional Programming */
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.querySelector('#array').textContent = arr
/* Output Odds Only Array */
document.querySelector('#odds').textContent = arr.filter((arr) => arr % 2 != 0)
/* Output Evens Only Array */
document.querySelector('#evens').textContent = arr.filter((arr) => arr % 2 == 0)
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').textContent = arr.reduce((acc, curr) => acc + curr)
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').textContent = arr.map((num) => num * 2)
/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').textContent = arr.map((num) => num * 2).reduce((acc, curr) => acc + curr)
