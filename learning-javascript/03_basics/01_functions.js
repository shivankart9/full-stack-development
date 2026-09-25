function myLastName() {
    console.log("T")
    console.log("I")
    console.log("W")
    console.log("A")
    console.log("R")
    console.log("I")
}

// myLastName()

// function addTwoNumber(num1,num2) { // num1 and num2 here are parameters
//    console.log(num1+num2)
// }

// addTwoNumber(4,"5") //45

// to store function in a variable we need to create a function which returns a value instead of just printing

function addTwoNumber(num1,num2) {
    // let result = num1+num2
    // return result
    return num1+num2
}

const ans = addTwoNumber(4,5)
// console.log("result = ",ans)

function loginUserMsg(username = "ramdev") { // ramdev here  is the parameter so if user do not enter the username so ramdev will act as the username 
    if(username === undefined) { // for now this if statement is of no use because we have given parameter above
        console.log("please enter your username")
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMsg("shivankar")) //shivankr just logged in

console.log(loginUserMsg()) // ramdev just logged in



