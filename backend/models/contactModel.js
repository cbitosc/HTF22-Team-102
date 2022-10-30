const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    required: true} }, { timestamps: true })

module.exports  = mongoose.model('Contact', contactSchema)