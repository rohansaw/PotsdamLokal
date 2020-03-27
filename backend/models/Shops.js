const mongoose = require('mongoose')

const { Schema } = mongoose

const ShopsSchema = new Schema({
  name: String,
  industries: [String],
  description: String,
  address: {
    plz: Number,
    street: String
  },
  delivers: Boolean,
  ownerMail: String
})

mongoose.model('Shops', ShopsSchema)
