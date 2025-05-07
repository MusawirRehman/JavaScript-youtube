//  Primitive Data Types
// 2. String
// 1. Number
// 3. Boolean
// 5. Null
// 4. Undefined
// 6. Symbol
// 7. BigInt

const score = 100  
const scoreValue = 100.3  

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = symbol('123')
const anotherId = symbol('123')

console.log(id === anotherId);

// const bigNumber =2345657865455674n


//  Reference Data Types or Non-Primitive Data Types
// 2. Array
// 1. Objects
// 3. Functions

const heros=['Thor', 'Ironman', 'Hulk']

 let myObj ={
    name: "Musawir",
    age:18,
}

 const myFunction = function (){
    console.log("Hello world");
}

console.log(typeof bigNumber)