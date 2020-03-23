const mongoose = require('mongoose')

const { Schema } = mongoose

const ShopsSchema = new Schema({
  name: String,
  branch: String
})

mongoose.model('Shops', ShopsSchema)
