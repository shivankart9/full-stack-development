class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`username is ${this.username}`)
    }

    static createId() { // used static so this functonality is not for everyone
        return `123`
    }
}

const shivankar = new User("shivankar")

// console.log(shivankar.createId()); // static is used so it do not allow acces to any one not even there childs

class Teacher extends User {
    constructor(username,email) {
        super(username) 
        this.email = email
    }
}

const ayush = new Teacher("ayush","shivankar")

ayush.logMe()

// console.log(ayush.createId()) // not have access of createdId as we used static above
