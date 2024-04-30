require('dotenv').config()
const express = require('express')
const app = express()

const mongoose = require("mongoose");



mongoose.connect(process.env.MONGO_URI).then( then => {
    app.listen( process.env.PORT, () => {
        console.log(`Example app listening on port ${process.env.PORT}`)
      })
}).catch(err=>console.log('error connecting to mongo', err))



app.get('/', (req, res) => {
    console.log( process.env.TEST_ME, 'yee')
    
  res.send('Hello World')
})


