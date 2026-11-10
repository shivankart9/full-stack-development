// object literal

const user = {
    username : "shivankart9",
    logincount : 8,
    signedIn : true,

    getUserDetails : function() {
        // console.log("got user details from database")
        // console.log(`username : ${this.username}`);
        console.log(this);
        
        
    }
}

console.log(user.username)
console.log(user.getUserDetails())

// Constructor function - new keyword is called as the constructor function - this give new instance

// const promise = new Promise()
const date = new Date()

function User(username,loginCount,isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function() {
        console.log(`Welcome ${this.username}`);
        
    }

    return this // if we do not write return this it will automatically return as this is predefined
}

const userOne = new User("shivankar",8,false)
const userTwo = new User("Ayush",9,true) // over write the userOne if we do not write new keyword

console.log(userOne)