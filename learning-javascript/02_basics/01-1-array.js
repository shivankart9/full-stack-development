const marvelHeroes = ["thor","ironman","spiderman"]

const dcHeroes = ["superman","flash","batman"]

// marvelHeroes.push(dcHeroes)

// console.log(marvelHeroes)// [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvelHeroes[3][1]) // flash

const allHeroes = marvelHeroes.concat(dcHeroes)

// console.log(allHeroes) // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// spread function - it is better from concat func as in concat we can merge one time at a time but in spread we can merge multiple array

const allNewHeroes = [...marvelHeroes,...dcHeroes]

console.log(allNewHeroes) // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// flat function - simplifies the array by concatinating the sub array inside a array

const khichdiArr = [1,2,3,[5,6,7],9,8,[4,5,[8,9]]]

const flatArr = khichdiArr.flat(Infinity)

console.log(flatArr) //[1, 2, 3, 5, 6,7, 9, 8, 4, 5,8, 9]



console.log(Array.isArray("shivankar")) // false 
console.log(Array.from("shivankar"))
console.log(Array.from({name: "shivankar"})) // gives empty array as it failed to make array 



let score1 = 100
let score2 = 200
let score3= 300

console.log(Array.of(score1,score2,score3))