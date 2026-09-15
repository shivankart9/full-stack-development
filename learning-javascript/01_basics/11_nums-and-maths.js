const score = 100;

console.log(score); //100

// another method to declare number
const fees = new Number(100000);

console.log(fees); //[Number : 100000]

console.log(fees.toString()); //100000 //data type converted to string

console.log(fees.toString().length); //6 // after converting data type to string we can use string functions

console.log(score.toFixed(3)); //100.000

const othernumber = 82.3685;

console.log(othernumber.toPrecision(4)); //82.37 //returns value in string and do approximation upto where we assign value . value can be assigned only between 1-21

const hundreads = 1000000;

console.log(hundreads.toLocaleString()); //1,000,000 // make easy to read zeroes

console.log(hundreads.toLocaleString("en-IN")); //according to india standard

// +++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-7)); //abs convert to positve value from negative //7

console.log(Math.round(9.9)); // removes point value and do round of // 10

console.log(Math.ceil(4.2)); // removes the point value and give the  upper value // 5

console.log(Math.floor(9.9)); // removes  the point value and gives the down value // 9

console.log(Math.min(5, 6, 4, 3, 7)); // gives the minimum value //3

console.log(Math.max(5, 6, 4, 3, 7)); // gives the maxinmum value //7

// random function

console.log(Math.random()); // gives value between 0 and 1

console.log(Math.floor(Math.random() * 10) + 1); // floor used here to get single digit value ,multiplied by 10 because we want value more than 0 , added 1 because we do not want zero

// to get values between 10 to 20

const min = 10

const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+min) 

// to get values between 30 to 40

const min2 = 30

const max2 = 40

console.log(Math.floor(Math.random() * (max2-min2+1)+min2))
