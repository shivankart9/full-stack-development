// const cannot be changed
const accountId = 1234

// let can be changed and it does not have scope problem so we use let to declare variable
let accountEmail = "shivankart9@gmail.com"

// var can be changed but it have scope problem so we do not use var and  it is also use to declare variable
var accountPassword = "1256"

// prefer not to use var beacuse of block scope and functional scope

// we can declare a variable directly as well but this is not good way
accountCity = "jaipur"

// undefined 
let accountState

console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])