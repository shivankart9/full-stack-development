const user = {
    _email : "shivankart9@gmail.com",
    _password : "abc",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }

}

const shivankar = Object.create(user)

console.log(user.email)