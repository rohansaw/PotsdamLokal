const router = module.exports = require('express').Router()
const auth = require('../../auth')
const mongoose = require('mongoose')

const Shops = mongoose.model('Shops')

router.post('/', auth.optional, (req, res) => {
  const { shop } = req.body
  console.log(shop)

  if (!shop.name) {
    res.status(422).json({ errors: { name: 'is required' } })
  }

  const finalShop = new Shops(shop)

  finalShop.save()
    .then(() => {
      res.json({ shop: finalShop })
    })
})
