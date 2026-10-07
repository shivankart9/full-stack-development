// for loop



for(let i = 0; i < 10; i++){
   const element = i

   if(element == 6) {
    console.log(`6 is my lucky number`)
   }
   console.log(`index ${element}`)
}

for(let i = 0; i <= 10; i++){
    console.log(`outer loop ${i}`)

    for(let j = 0; j <= 10; j++) {
        // console.log(`Inner loop  value ${j} Inner loop number ${i}`)
        console.log(`${i} * ${j} = ${i*j}`)
    }
}

let newArray = ["shivankar","shivam","ram","syam"]

console.log(newArray.length)

for(let i = 0; i < newArray.length; i++) {
    const element = newArray[i]

    console.log(element)
}

// Break and continue

for(let i = 1; i <= 20; i++) {

    if(i == 5) {
        console.log(" 5 detected")
        break
    }

    console.log(`Value of i is ${i}`)
}
for(let i = 1; i <= 20; i++) {

    if(i == 5) {
        console.log(" 5 detected")
        continue
    }

    console.log(`Value of i is ${i}`)
}

// when we use break so it stops the loop completly 
// when we use continue so it skips one element but continue the loop from there only