const router = module.exports = require('express').Router()
const paginate = require('jw-paginate')
const auth = require('../../auth')
const mongoose = require('mongoose')

const Shops = mongoose.model('Shops')

router.use('/industries', require('./industries'))
router.use('/create', require('./create'))

router.get('/', auth.optional, (req, res, next) => {
  const page = parseInt(req.query.page) || 1
  const filters = JSON.parse(req.query.filters)
  const { industries, categories, text } = filters
  console.log(page, filters)

  console.log(industries.map(industry => ({ industries: industry })))
  const pageSize = 15
  let dbQuery = {}
  if (industries.length > 0) {
    dbQuery = { $or: industries.map(industry => ({ industries: industry })) }
  }

  Shops.find(dbQuery)
    .then((shops) => {
      const pager = paginate(shops.length, page, pageSize)

      const pageOfShops = shops.slice(pager.startIndex, pager.endIndex + 1)

      return res.json({ pager, pageOfShops })
    })
})
