const userEmail = "shivankart9@gmail.com"

if(userEmail) {
    console.log("Got user email")
} else {
    console.log("don't have user email")
}

// falsy values

// false , 0, -0 , BigInt 0n , "" , null ,  undefined , NaN

// truthy values
// all which are not falsy values are truthy values 
// "0" , 'false' , " " , [] , {} , function(){} 

const testArr = []

if(testArr.length === 0) {
    console.log("Array is empty")
}

const empty = {}

if(Object.keys(empty).length === 0) {
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??): null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 45

console.log(val1)

// ternery operator

// condition ? true : false

const iceTeaPrice = 100 

iceTeaPrice > 50 ?  console.log("it is greater than 50") : console.log("it is not greater than 50")