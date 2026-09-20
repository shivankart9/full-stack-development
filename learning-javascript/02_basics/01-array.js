// array

const myarr = [0,1,2,3,4,5]
console.log(myarr[2]) //2

const myarr2 = new Array(1,2,3,4,5)
console.log(myarr2[1]) //2

// array methods

myarr.push(6) //push method use to store a data at the end of the array
myarr.push(7)
myarr2.pop()   // to remove the last element of the array
myarr2.unshift(10)// unshift add the number at the begining
myarr.shift()//removes the first element

console.log(myarr)
console.log(myarr2)

console.log(myarr.includes(8)) // False // this checks in array whether that element exist or not it gives answer in boolean

console.log(myarr.indexOf(4))// 3 // it gives the index of that element // if the input element does not exist so it gives -1

const strarray = myarr.join() // converts array data to string

console.log(strarray)

// slice ,splice

console.log("A " ,myarr)

const myn1 = myarr.slice(1,3)// slice does not remove the specific part from array but creates a copy 
console.log("B ",myarr)

console.log(myn1)

const myn2 = myarr.splice(1,3) // splice remove that specific part from that array
console.log("c ",myarr)

console.log(myn2) 