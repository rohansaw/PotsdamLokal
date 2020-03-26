const mongoose = require('mongoose')

const { Schema } = mongoose

const ShopsSchema = new Schema({
  name: String,
  industries: [String],
  description: String,
  adress: {
    plz: Number,
    street: String
  },
  delivers: Boolean
})

mongoose.model('Shops', ShopsSchema)
