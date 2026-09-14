const score = 100

console.log(score) //100

// another method to declare number
const fees = new Number(100000)

console.log(fees) //[Number : 100000]

console.log(fees.toString()) //100000 //data type converted to string

console.log(fees.toString().length)//6 // after converting data type to string we can use string functions

console.log(score.toFixed(3)) //100.000

const othernumber = 82.3685

console.log(othernumber.toPrecision(4)) //82.37 //returns value in string and do approximation upto where we assign value . value can be assigned only between 1-21

const hundreads = 1000000

console.log(hundreads.toLocaleString()) //1,000,000 // make easy to read zeroes

console.log(hundreads.toLocaleString('en-IN')) //according to india standard

// +++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++

console.log(Math)

console.log(Math.abs(-7)) //abs convert to positve value from negative //7

console.log(Math.round(9.9)) // removes negative value and do round of // 10