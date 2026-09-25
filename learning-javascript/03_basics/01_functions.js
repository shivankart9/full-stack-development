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

// console.log(loginUserMsg("shivankar")) //shivankar just logged in

console.log(loginUserMsg()) // ramdev just logged in

// functions with objects and array

function calculateCartPrice(val1,val2,...num1) { //... this dot dot is known as rest operator as well spread operator but it depends upon its usecase what we call it
    return num1;
}

console.log(calculateCartPrice(200,400,500,2000)) // it will print a array which will include 500 and 2000 only as starting two values are stored in val1 and val2

const user = {
    price: 99,
    username: "shivankar"
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

// direct 
handleObject({
    username: "shivankar",
    price:99
})

// array handling

const myNewArray = [100,2000,5000,400]

function handleArray(anyArray) {
    return anyArray[1]
}

// console.log(handleArray(myNewArray))

// direct 

console.log(handleArray([100,2000,5000,400])) // 200