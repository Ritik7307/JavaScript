const name = "Dustin"
const repoCount = 50;

// console.log(name + repoCount + "Value")

console.log(`My name is ${name} and my repo count is ${repoCount}`)

const user = new String('believer')

console.log(user.length)
console.log(user.toUpperCase())

const newString = user.substring(0,7)
console.log(newString)

const anotherString = user.slice(-8,7)
console.log(anotherString)

const newStringOne = user.trim("    hey     ");
console.log(newStringOne)