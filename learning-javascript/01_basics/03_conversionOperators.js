let score = 9;
let score2 = "9";
let score3 = "9shiv";

console.log(typeof score); // number
console.log(typeof score2); // string

// converting score2 type to number
let valueInNumber = Number(score2);
console.log(typeof valueInNumber); // number

console.log(valueInNumber); // 9

// NAN - sometimes js covert it to number but when you will print it so it will give NAN as the cocnstant you wanted to convert could also include other than number
let valueInNumber2 = Number(score3);
console.log(typeof valueInNumber2); // number

console.log(valueInNumber2); // NAN

// converting to boolean
let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)

console.log(booleanisLoggedIn)

// 1 => true; 0 => false
// "" => false
// "shivankar" => true

// converting number to string 
let rollnumber = 4
let convertrollnumber = String(rollnumber)

console.log(typeof convertrollnumber) // string
console.log(convertrollnumber) // 4