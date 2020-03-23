const app = module.exports = require('express')()

app.get('/api/logout', (req, res) => {
  req.logout()
  return res.send()
})
