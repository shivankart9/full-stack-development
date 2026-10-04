// if

const isUserLoggedIn = true

const temperature = 43

if(temperature < 50) {
     console.log("temprature is less that 50")
} else  {
    console.log("temperature is more that 50")
}

// < , > , <= , >= , == , != , === , !== // consdition operators 

const score = 500

if(score > 200) {
    const power = "fly"
    console.log(`Power is ${power}`)
}

const balance = 1000

// if (balance > 500) console.log("person is rich"), console.log("just kidding"); // do not write code like this 

if(balance < 500) {
    console.log("peroson have less than 500")
} else if(balance < 750) {
    console.log("person have balance less tham 750")
} else {
    console.log("person have balance more than 750")
}


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromGithub = false

if(userLoggedIn && debitCard) {
    console.log("eligible to buy course")
}

if(loggedInFromGithub || loggedInFromGoogle) {
    console.log("user logged in")
}