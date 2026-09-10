const name = "shivankar"

const repoCount = 15

console.log(name + repoCount + " Shivankart9") // shivankar15 Shivankart9 // Not recommended syntax for concatination


// recommended syntax modern way it is called as string manipulation

console.log(`My name is ${name} I have made ${repoCount} repositries in my github account`)

// another method to declare string

const gamename = new String('shivankar')

console.log(gamename[0]) // s

console.log(gamename.__proto__) //{} // this gives the method syntax but in vs code it shoes {} empty brackets but actually it is not empty

console.log(gamename.length) // 9

console.log(gamename.toUpperCase()) // SHIVANKAR