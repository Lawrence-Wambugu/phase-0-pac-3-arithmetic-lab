function add(a, b) {
    return a + b;
}
function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function makeInt(n) {
    return parseInt(n, 10);
}
function preserveDecimal(n) {
    return parseFloat(n);
}

function increment(n) {
    return n +1;
}

function decrement(n) {
    return n -1;
}
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    makeInt,
    preserveDecimal,
    increment,
    decrement,
}