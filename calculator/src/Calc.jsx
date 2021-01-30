function add(a,b){
    let sum = a + b;
    return sum;
}
function sub(a,b){
    let sub = a - b;
    return sub;
}
function multiply(a,b){
    let multiply = a * b;
    return multiply;
}
function div(a,b){
    let div = a / b;
    div = div.toFixed(2)
    return div;
}
export {add, sub, multiply, div};