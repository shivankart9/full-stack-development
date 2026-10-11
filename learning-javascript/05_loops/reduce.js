const myNums = [1,2,3,4]

const intialValue = 5

// const total = myNums.reduce(function (acc,currVal)  {
//     return acc+currVal
// },intialValue)

const total = myNums.reduce( (acc,currVal) => acc + currVal,intialValue )

console.log(total)

// example

const cart = [
    {
        course: 'js course',
        price: 2999
    },
    {
        course: 'py course',
        price: 999
    },
    {
        course: 'Web dev course',
        price: 3999
    }
]

const sumPrice = cart.reduce( (acc,item) => acc+item.price,0)

console.log(sumPrice)
