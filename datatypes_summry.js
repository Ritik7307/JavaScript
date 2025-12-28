// Primitive

// 7 types: String, Number, Booleann null, undefined, Symbol,BigInt

const score =100;
const isLoggedIn = true;
const outsideTemp = null;
let userEmail; // uundefined
const id  = Symbol('123');
const anotherId = Symbol('123');
// console.log(id==anotherId); // false



// Reference (Non- primitive)

// Array, Objects, Functions

const heroes = ["shaktiman","naagraaz","doga"]

let myObj = {
    name:"Dustin",
    age:"22",
}

const myFunction = function(){

}











// *********************************//

// Memory

// 2 types: Stack(Priitive)=> when it is used we only get the copy of variable used, Heap(Non-primitive)=> original value ka reference milta hai.


let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne;
userTwo.email = "raghav@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
