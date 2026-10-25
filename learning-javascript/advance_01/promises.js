const promiseOne = new Promise(function(resolve,reject) {
    // Do an async task
    // DB calls, cryptography,network
    setTimeout( function(){
        console.log('async task is completed')
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async Task 2 completed")
        resolve()
    }, 1000);
}).then(function(){
    console.log("async 2 resolved")
}) 


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({uername: "shivankar",email: "shivankart9@gmail.com"})
    },1000);
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "shivankar",email: "shivankart9@gmail.com",course: "B.Tech"})
        }else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then( (user) => {
    console.log(user)
    return user.username    
} ).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("The promise is Resolved or rejected")
})


const promiseFive = new Promise((resolve,reject) => {
     setTimeout(() => {
        let error = false
        if(!error){
            resolve({username: "shivankar",password: "97852613"})
        }else {
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()



// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ",error)
//     }
// }

// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users').then((response) =>{
    return response.json
}).then((data)=>{
    console.log(data)
}).catch((error) => console.log(error))