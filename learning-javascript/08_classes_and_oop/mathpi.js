const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor) 
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// console.log(Math.PI)

// Math.PI = 5
// console.log(Math.PI)

const water = {
    name : "blackWater",
    price : 1000,
    isAvailable : true
}

console.log(water)

console.log(Object.getOwnPropertyDescriptor(water, "name"))

Object.defineProperty(water,"name",{
    writable : false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(water, "name"))

for (const [key,value] of Object.entries(water)) {
    console.log(`${key},${value}`) // name will not print as we difened name as enumerable above
}
