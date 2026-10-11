// map - can return the value

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.map( (num) => num+10)

console.log(newNums)

//  Adding 10 by for each

const newNums2 = [] 

myNums.forEach( (num) => {
    if(num > 0) {
        num = num + 10
        newNums2.push(num)
    }
})

console.log(newNums2)

// chaining - values pass to another chain

const chaining = myNums.map( (num) => num*10).map( (num) => num+1).filter( (num) => num > 60)

console.log(chaining)