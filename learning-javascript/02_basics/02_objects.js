// singleton
// object.create

// object literals

const mysym = Symbol("key1")

const Jsuser = {
    name : "shivankar",
    "full name": "shivankar tiwari", // this can't be acessed by console.log(Jsuser.full name)
    age: 19,
    location: "dehradun",
    email: "shivankart9@gmail.com",
    isLoggin: false,
    lastLoginDays: ["monday","tuesday","webnesday"],
    [mysym]: "mykey1"
}

console.log(Jsuser.isLoggin)
console.log(Jsuser["full name"])

console.log(Jsuser[mysym])

// to change object values

Jsuser.age = 40

// to freeze so no further changes could occur in object

// Object.freeze(Jsuser)    

Jsuser.age = 80

console.log(Jsuser)

// greeting

Jsuser.greeting = function() {
    console.log("Hello User")
}

Jsuser.greetingtwo = function() {
    console.log(`hello User ${this.name}`)
}

console.log(Jsuser.greeting) //[Function (anonymous)]

console.log(Jsuser.greeting()) // Hello User

console.log(Jsuser.greetingtwo()) // hello User shivankar 