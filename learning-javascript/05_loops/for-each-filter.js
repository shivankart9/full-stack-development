// for each - do not return value
 
const coding = ["js","py","Rust","c","c++","java"]

// const values = coding.forEach( (item) => {
//     // console.log(item)
//     // return item
// } )

// console.log(values) // undefiend

// filter operation - call back function
 
const myNums = [1,2,3,4,5,6,7,8,9,10]

const val = myNums.filter( (num) => num > 4)

console.log(val)

// if we open scope so we have to to retun value manually

const val1 = myNums.filter( (num) => {
    return num > 4
})

console.log(val1)

// using for each 

const newNums = []

myNums.forEach( (num2) => {
    if(num2 > 4) {
        newNums.push(num2) // pushed the values from myNums to newNums
    }
} )

console.log(newNums)

// Excercise

const Books = [
    {title: 'book1', genre: 'fiction', publish: 1981, edition: 2007},
    {title: 'book2', genre: 'Non-fiction', publish: 1988, edition: 2009},
    {title: 'book3', genre: 'fiction', publish: 1980, edition: 2006},
    {title: 'book4', genre: 'Non-fiction', publish: 1986, edition: 2003},
    {title: 'book5', genre: 'fiction', publish: 1982, edition: 2001},
    {title: 'book6', genre: 'Non-fiction', publish: 1984, edition: 2000},
]

const userBooks = Books.filter( (bk) => bk.edition > 2003)
const userBooks2 = Books.filter( (bk) => bk.genre === 'Non-fiction')



console.log(userBooks)
console.log(userBooks2)