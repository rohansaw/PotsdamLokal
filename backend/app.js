const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const errorHandler = require('errorhandler')

// Configure mongoose's promise to global promise
mongoose.promise = global.Promise
const isProduction = process.env.NODE_ENV === 'production'
const app = express()

app.use(cors({ origin: 'http://localhost:8080' }))
app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({ secret: 'potsdam-lokal', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }))

if (!isProduction) {
  app.use(errorHandler())
}

// Configure Mongoose, options remove deprecation warnings
mongoose.connect('mongodb://localhost/potsdam-lokal', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.set('debug', true)

require('./models/Users')
require('./config/passport')
app.use(require('./routes'))

// Error handlers & middlewares
if (!isProduction) {
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
      errors: {
        message: err.message,
        error: err
      }
    })
  })
}

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    errors: {
      message: err.message,
      error: {}
    }
  })
})

app.listen(3000, () => console.log('App running on http:localhost:3000'))
