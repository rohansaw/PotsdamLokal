const router = module.exports = require('express').Router()
const paginate = require('jw-paginate')
const auth = require('../../auth')

router.use('/tags', require('./tags'))

// example array of 150 items to be paged
const projects = [...Array(150).keys()].map(i => ({ id: (i + 1), title: 'Ökologischer Bauernhof: Ernte ' + (i + 1) }))

router.get('/', auth.optional, (req, res, next) => {
  const page = parseInt(req.query.page) || 1
  console.log(req.query.page)

  const pageSize = 15
  const pager = paginate(projects.length, page, pageSize)

  const pageOfProjects = projects.slice(pager.startIndex, pager.endIndex + 1)

  return res.json({ pager, pageOfProjects })
})

router.post('/', auth.optional, (req, res, next) => {
  projects[0] = ({
    id: projects.length + 1,
    title: req.body.title
  })
  console.log(projects)

  return res.send('')
})
