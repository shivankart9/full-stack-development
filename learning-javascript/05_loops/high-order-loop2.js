const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const  key in myObject) {
    console.log(`${key} : ${myObject[key]}`)
}

const arr = [1,2,3,4,5]

for (const key in arr) {
        console.log(`key = ${key}`) // prints the index
        console.log(`value = ${arr[key]}`)
}

// in for of loop for array it was directly printing the array values but for in prints the index of the array directly 

const map = new Map()

map.set("name","shivankar")
map.set("age",18)
map.set("course","btech")

for (const key in map) {
    console.log(key)
}

// in maps we can not use for in loop