require('dotenv').config();

const express = require('express')
const app = express()


app.get('/', (res, req) => {

req.send('<h1>99 Bottles of beer on the wall</h1><a href="/98">Take one down, pass it around</a>')


})


app.get('/:number_of_bottles', (req,res) => {

    const bottles = +req.params.number_of_bottles
    const bottlesMinusOne = bottles-1
    const random = Math.round(Math.random() * 1)
    const randomBottles = bottles + Math.round(Math.random() * 10)
  
    if(random){

        if (bottles > 0) {res.send ( `<h1>${bottles} Bottles of beer on the wall</h1><a href="/${bottlesMinusOne}">Take one down, pass it around</a>`)}
        
        else {res.send ( `<h1>${bottles} Bottles of beer on the wall</h1><a href="/">Start over</a>`)}}
    
    else{
        
        if (bottles > 0) {res.send ( `<h1>${randomBottles} Bottles of beer on the wall</h1><a href="/${randomBottles-1}">Take one down, pass it around</a>`)}
        
        else {res.send ( `<h1>${bottles} Bottles of beer on the wall</h1><a href="/">Start over</a>`)}

    }
        
})



// app.get('/fibonnaci/:number', (req, res) => {

// let number = +req.params.number
// let num1 = Math.round(number/1.618)
// let num2 = Math.round(num1/1.618)
// let sum = num1 + num2

// console.log(number, num1, num2, sum)
// if (number === sum || number === 0 || number === 1){res.send('Very good. It is Fibonacci.')} 
// else {res.send('I can tell this is not a fibonacci number.')}
// })






app.listen(process.env.PORT, () => {

    console.log(`Listening on port ${process.env.PORT}`)

})