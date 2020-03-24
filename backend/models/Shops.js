const mongoose = require('mongoose')

const { Schema } = mongoose

const ShopsSchema = new Schema({
  name: String,
  tag: [String]
})

mongoose.model('Shops', ShopsSchema)
