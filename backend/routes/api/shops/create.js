const router = module.exports = require('express').Router()
const auth = require('../../auth')
const mongoose = require('mongoose')

const Shops = mongoose.model('Shops')

router.post('/', auth.optional, (req, res) => {
  console.log(req.body)
  const { shop } = req.body
  console.log(shop)

  if (!shop.name) {
    res.status(422).json({ errors: { name: 'is required' } })
  }

  console.log('l;akjsd;lkj')
  const finalShop = new Shops(shop)
  console.log('l;akjsd;lkj')

  finalShop.save()
    .then(() => {
      res.json({ shop: finalShop })
    })
    .catch(err => console.log(err))
})