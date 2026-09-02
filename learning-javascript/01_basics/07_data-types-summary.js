// premitive data type 

// 7 categories = string , boolean, number , null , undefined , BigInt, symbol

// number
const score = 100
const scoreValue = 100.5

// boolean
const isLoggedIn = false

// null
const inSideTemp = null

// undefined
let name;

// symbol
const id = symbol('432')
const secondid = symbol('432')

console.log(id === secondid) // false : because it is symbol 

// big int
const number = 453939932923n // if we write n at last it automatically store in Bigints data type



// reference (non-premitive) data type

// categories = array , object , function

// array
const names = ["shivankar","arpita","aarav","sachin","palak"]

// object
let obj = {
    name : "shivankar",
    age : 19,
}

// function

const myfunction = function() {
    console.log("shivankar");
}



