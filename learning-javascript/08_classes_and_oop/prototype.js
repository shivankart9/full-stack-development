// let myName = "shivankar    "

// console.log(myName.length); // count spaces as well 



let myfriends = ["Ayush","suraj"]

let firendsPower = {
    Ayush : "intelligence",
    suraj : "attractiveness",

    getSurajPower: function(){
        console.log(`suraj power is ${this.suraj}`);
    }
}

// added property to all object
Object.prototype.shivankar = function() {
    console.log(`shivankar is present in all objects`);
}

firendsPower.shivankar()

// inheritance

const user = {
    name : shivankar,
    age : 19
}

const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__ : teachingSupport
}

teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(teachingSupport,teacher)

let anotherUsername = "shivankarTiwari    "


String.prototype.trueLength = function() {
    console.log(`${this.name}`)
    console.log(`True length is ${this.trim().length}`)
}
anotherUsername.trueLength()