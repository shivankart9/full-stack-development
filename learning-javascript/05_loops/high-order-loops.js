// For of

const arr = [1,2,3,4,5]

for (const i of arr) {
    console.log(i)
}

const greetings = "Hello Ji"

for(const i of greetings) {
    if(i == " ") {
        continue
    }
    console.log(`Each char is ${i}`)
}

// maps - holds unique key value pair 

const map = new Map()

map.set("name","shivankar")
map.set("age",18)
map.set("course","btech")

console.log(map)


for (const [i,j] of map) {
    console.log(`key = ${i}`)
    console.log(`value = ${j}`)
}

// this shows error that objects not iterable

// const myObject = {
//     'name1': 'shivankar',
//     'name2': 'shivam',
//     'name2': 'rahul'
// }

// for(const i of myObject) {
//     console.log(i)
// }