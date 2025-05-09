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

// ***************************************

// two kinds of memory used
// 1) stack (Primitive datatypes are used in stack)
// 2) heap(non Primitive datatypes are used in heap)

let myyoutubename = "mussidotcom"

let anothername = myyoutubename
anothername = "chaiaurcode"

console.log( myyoutubename);
console.log(anothername);

let userOne ={
    email:"google.com",
    upiId:"user@upi"
}
let userTwo = userOne
userTwo.email = "musssi@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
// userOne and userTwo are pointing to the same object in memory
// so if we change the value of userTwo, it will also change the value of userOne
// to avoid this we can use spread operator