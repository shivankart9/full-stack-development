// dates

let mydate = new Date()

console.log(mydate.toString()) // Tue Sep 15 2026 20:27:48 GMT+0530 (India Standard Time)

console.log(mydate.toDateString()) // Tue Sep 15 2026

console.log(mydate.toLocaleDateString()) // 9/15/2026

console.log(mydate.toJSON()) // 2026-09-15T15:02:50.273Z

console.log(mydate.toLocaleString()) // 9/15/2026, 8:33:54 PM

console.log(typeof mydate) // object

// specific date

let createddate = new Date(2026,8,16)
let anotherdate = new Date("2026-08-15")
let dateother = new Date(2026,8,16,8,48)

console.log(createddate.toDateString())// Wed Sep 16 2026
console.log(anotherdate.toLocaleDateString())// 8/15/2026
console.log(dateother.toLocaleString()) // 9/16/2026, 8:48:00 AM

// time stamp

let myteamstamp = Date.now()
console.log(myteamstamp) // 1789485740295

console.log(createddate.getTime()) // 1789497000000

console.log(Math.floor(Date.now()/1000))// 1789486222102

let newdate = new Date()
console.log(newdate.getDay())
console.log(newdate.getMonth() + 1) // added one as in js month start from zero

newdate.toLocaleString('default', {
    weekday: "long",
})