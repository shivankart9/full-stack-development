const name = "shivankar"

const repoCount = 15

console.log(name + repoCount + " Shivankart9") // shivankar15 Shivankart9 // Not recommended syntax for concatination


// recommended syntax modern way it is called as string manipulation

console.log(`My name is ${name} I have made ${repoCount} repositries in my github account`)

// another method to declare string

const gamename = new String('shivankar-st')

console.log(gamename[0]) // s

console.log(gamename.__proto__) //{} // this gives the method syntax but in vs code it shoes {} empty brackets but actually it is not empty

// functions

console.log(gamename.length) // 9

console.log(gamename.toUpperCase()) // SHIVANKAR

// for checking position of string 

console.log(gamename.charAt(7)) // a

console.log(gamename.indexOf('n')) // 5

// substring - we can not give negative index if we do so it automatically set that index to zero
const newstring = gamename.substring(0,4)

console.log(newstring) // shiv

// slice - gain this we can give negative index as well
const anotherstring = gamename.slice(-12,4)

console.log(anotherstring) //shiv

// trim - removes staring and ending spaces // there is as well trimStart() function and trimEnd() function
const newstringone = "    shivankar    "

console.log(newstringone) //    shivankar    
console.log(newstringone.trim()) //shivankar

