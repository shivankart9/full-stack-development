function setUsername(username) {

    // complex DB calls
    this.username = username
}

function createUser(username,email,password) {
    setUsername.call(this,username) // call is used here to hold the reference used this for giving the current context

    this.email = email
    this.password = password
}

const water = new createUser("water","water@gmail.com",9123654)
const limca = new createUser("limca","limca@gmail.com",78564451)

console.log(water)