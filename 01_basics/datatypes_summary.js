// Primitive 

// 7 : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggeddIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


const bigNumber = 423423423423424242423424n 


// Refence (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Adnan",
    age: 22,
}

const myFunction = function(){
    console.log("Meow");
    
}

// console.log(typeof bigNumber);
// console.log(typeof heros);

// ++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) - Provides copy
//  Heap (Non Primitive) - Provides refernce

let myName = "QUAZI ADNAN HAQUE"

let anotherName = myName

// console.log(anotherName);

let user = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = user

userTwo.email = "adnan@googl.com"

console.log(userTwo.email);
console.log(user.email);