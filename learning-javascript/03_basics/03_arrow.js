const user = {
    username : "shivankar",
    price: 900,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to the website`)
        // console.log(this) // prints everything
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this) // empty

// function coffee() {
//     let username = "shivankar"
//     console.log(this.username)
// }

// coffee() // undefined


// const coffee = function() {
//     let username = "shivankar"
//     console.log(this.username)
// }

// coffee() // undefined

// const coffee = () => {
//     let username = "shivankar"
//     console.log(this.username)
// }

// coffee() // undefined

// arrow  function

// const addTwo = (num1,num2) => {
//     return num1+num2
// }

// implicit return
// const addTwo = (num1,num2) => num1 + num2

const addTwo = (num1,num2) => (num1+num2)
 

console.log(addTwo(4,5))