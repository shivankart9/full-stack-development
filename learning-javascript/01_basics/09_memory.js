// Stack (In primitive) , Heap(In non-primitive) memory


// In stack when we assign another variable so it is given the copy of that value

let myLinkedinUsername = "shivankart9"

let newLinkedinUsername = myLinkedinUsername

newLinkedinUsername = "shivankar-tiwari"

console.log(newLinkedinUsername) // value changed // shivankar-tiwari

console.log(myLinkedinUsername) // still same value // shivankart9

// In Heap when we assign value of other value to another so it give refernce of that variable instead of copy

let userOne = {
    email : "shivankart9@gmail.com",
    upi : "shivankart@sbi"
}

let userTwo = userOne

userTwo.email ="tiwarishivankar@gmail.com"

console.log(userOne.email) // value will be changed // tiwarishivankar@gmail.com
console.log(userTwo.email) // value will be changed // tiwarishivankar@gmail.com