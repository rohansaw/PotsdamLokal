const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const errorHandler = require('errorhandler')

// Configure mongoose's promise to global promise
mongoose.promise = global.Promise

const app = express()

const isProduction = process.env.NODE_ENV === 'production'

app.use(cors())
app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }))

if (!isProduction) {
  app.use(errorHandler())
}

// Configure Mongoose
mongoose.connect('mongodb://localhost/passport-tutorial')
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

app.listen(3000, () => console.log('App running on port 3000'))
