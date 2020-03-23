const app = module.exports = require('express')()
const paginate = require('jw-paginate')
const auth = require('../auth')

// example array of 150 items to be paged
const projects = [...Array(150).keys()].map(i => ({ id: (i + 1), title: 'Ökologischer Bauernhof: Ernte ' + (i + 1) }))

// paged items route
app.get('/', auth.optional, (req, res, next) => {
  // get page from query params or default to first page
  const page = parseInt(req.query.page) || 1
  console.log(req.query.page)

  // get pager object for specified page
  const pageSize = 15
  const pager = paginate(projects.length, page, pageSize)

  // get page of items from items array
  const pageOfProjects = projects.slice(pager.startIndex, pager.endIndex + 1)

  // return pager object and current page of items
  return res.json({ pager, pageOfProjects })
})

app.post('/', (req, res, next) => {
  // ToDo: Dont use unshift for production, bad performance
  projects[0] = ({
    id: projects.length + 1,
    title: req.body.title
  })
  console.log(projects)
  // Returnt man so wirklich, fühlt sich unschön an...
  return res.send('')
})
