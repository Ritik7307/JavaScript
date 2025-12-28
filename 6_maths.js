const score  = 400
console.log(score);

const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))


const otherNumber = 23.8664

console.log(otherNumber.toPrecision(4))

const hundred = 10000000
console.log(hundred.toLocaleString());
console.log(hundred.toLocaleString('en-IN'));




// ***************MATHS***************//

/*
Math.ceil
Math.floor
Math.pi
Math.random

 */

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min)