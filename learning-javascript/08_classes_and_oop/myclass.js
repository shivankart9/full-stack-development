// ES6

class user {
    constructor(username,email,password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    capitalUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const water = new user("water","water@gmail.com",78945612)

console.log(water.encryptPassword())
console.log(water.capitalUsername())

// behind the sccene

function User2(username,email,password) {
    this.username = username
    this.email = email
    this.password = password
}

User2.prototype.encryptPassword2 = function() {
    return `${this.password}abc`
}

const limca = new User2("limca","limac@gmail.com",78945612)

console.log(limca.encryptPassword2())