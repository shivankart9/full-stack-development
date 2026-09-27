
let num4 = 40 // global scope

if(true) {
let num1 = 10 // block scope
const num2 = 20
var num3 = 30
}

// console.log(num1) //error
// console.log(num2) //error

console.log(num3) // 30 // thats why we do not prefer to use var because it have scope problem we assiged it inside the if condition but when we printed it outside the condition so still it gave the output

// here inside if is block scope and the values we declare outside and are accesible from every where 

function one() {
    const username = "shivankar"

    function two() {
        const website = "urbandana.netlify.app"

        console.log(username)
    }

    // console.log(website) // gives error because we declared website inside two function

    two() //shivankar
}

// one() // no output as there is no console log or return function for the one function

if (true) {
    const username = "shivankar"
    if (true) {
        const website = "shivankart9.netlify.app"

        console.log(username + website) // shivankarshivankart9.netlify.app
    }

    // console.log(website)  // error
}

// console.log(username) // error

// +++++++++++++++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++++++++++++++++++

// addOne(5) // no error

function addOne(num) {
    return num+1
}

console.log(addOne(5)) // 6

// addTwo(5) // give error 

const  addtwo = function(num) {
    return num+2
}

console.log(addtwo(5)) // 7

