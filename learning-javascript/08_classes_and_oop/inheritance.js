class user {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`username is ${this.username}`)
    }
}

class Teacher extends user{
    constructor(username,email,password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`)
    }
}

const water = new Teacher("shivankar","shivankart@gmail.com",45896311)

water.addCourse()

const limca = new user("limca")

limca.logMe()

console.log(water instanceof Teacher)

water.logMe()