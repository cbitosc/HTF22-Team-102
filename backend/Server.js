require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const contacts = require('./routes/contacts')
const cors = require('cors')

const app = express()

let corsOptions = {
   origin : '*',
}
  
app.use(cors(corsOptions))
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})


app.use( contacts)


mongoose.connect("mongodb+srv://lalith:Lalith5%402003@cluster0.1hhyuel.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log('connected to database')
    
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 