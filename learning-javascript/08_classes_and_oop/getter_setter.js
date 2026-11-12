class User {
    constructor(email,password) {
        this.email = email
        this.password = password
    }

    // if we definie getter so it is must to define setter as well

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    } 

    set password(value){
        this._password = value // seting this but if someone access the value so the person gets the uppercase of the password
    }
}

const shivankar = new User("shivankart9@gmail.com","abc")

console.log(shivankar.password)
console.log(shivankar.email)