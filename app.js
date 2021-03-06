const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')
const path = require('path')


const app = express()

// Bodyparser Middleware
// app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(__dirname))
// Signup Route
app.post('/signup', (req, res)=>{
	console.log(req.body)
	res.send('hello')

})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on ${PORT}`))