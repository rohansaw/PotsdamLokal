const router = module.exports = require('express').Router()
const paginate = require('jw-paginate')
const auth = require('../../auth')
const mongoose = require('mongoose')

const Shops = mongoose.model('Shops')

router.use('/industries', require('./industries'))
router.use('/create', require('./create'))

router.get('/', auth.optional, (req, res, next) => {
  const page = parseInt(req.query.page) || 1
  console.log(req.query)
  const filters = JSON.parse(req.query.filters)
  console.log(page, filters)

  const pageSize = 15
  Shops.find({ $or: filters.map(filter => ({ industries: filter })) })
    .then((shops) => {
      const pager = paginate(shops.length, page, pageSize)

      const pageOfShops = shops.slice(pager.startIndex, pager.endIndex + 1)

      return res.json({ pager, pageOfShops })
    })
})
