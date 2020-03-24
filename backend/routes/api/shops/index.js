const router = module.exports = require('express').Router()
const paginate = require('jw-paginate')
const auth = require('../../auth')
const mongoose = require('mongoose')

const Shops = mongoose.model('Shops')

router.use('/industries', require('./industries'))
router.use('/create', require('./create'))

// example array of 150 items to be paged
const projects = [...Array(150).keys()].map(i => ({ id: (i + 1), title: 'Ökologischer Bauernhof: Ernte ' + (i + 1) }))

router.get('/', auth.optional, (req, res, next) => {
  const page = parseInt(req.query.page) || 1
  const filters = JSON.parse(req.query.filters)
  console.log(page, filters)

  const pageSize = 15
  // const shops = Shops.find({ $or: filters.map(filter => ({ industries: filter })) })
  const shops = Shops.find({industries: filters[0]})
  const pager = paginate(shops.length, page, pageSize)

  const pageOfShops = projects.slice(pager.startIndex, pager.endIndex + 1)

  return res.json({ pager, pageOfShops })
})

router.post('/', auth.optional, (req, res, next) => {
  projects[0] = ({
    id: projects.length + 1,
    title: req.body.title
  })
  console.log(projects)

  return res.send('')
})
